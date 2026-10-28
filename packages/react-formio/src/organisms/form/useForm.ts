import { Form } from "@formio/js";
import { EventEmitter2 } from "eventemitter2";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import { type MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from "react";

import type { ChangedSubmission, ComponentType, FormOptions, FormType, SubmissionType } from "../../interfaces";
import type { JSON, JSONRecord } from "../../interfaces/JSONRecord.js";
import { FormCustomEvent } from "./types";
import { useDeepMemo } from "./useDeepMemo";

type Webform = any;
type EventError = string | Error | Error[] | { message: string } | { message: string }[];

export interface UseFormProps<Data extends object = JSONRecord> {
  src?: string;
  url?: string;
  form?: FormType;
  /**
   * Controlled submission. Re-applied to the form only when its content deeply differs
   * from the previous value and from what the form currently holds.
   */
  submission?: SubmissionType<Data>;
  /**
   * Initial submission, applied once when the form instance is created.
   */
  defaultSubmission?: SubmissionType<Data>;
  options?: FormOptions;
  FormClass?: typeof Form;
  onFormReady?: (instance: Webform) => void;
  onPrevPage?: (page: number, submission: SubmissionType<Data>) => void;
  onNextPage?: (page: number, submission: SubmissionType<Data>) => void;
  onCancelSubmit?: () => void;
  onCancelComponent?: (component: ComponentType) => void;
  onChange?: (value: ChangedSubmission<Data>, flags: any, modified: boolean) => void;
  onCustomEvent?: (event: FormCustomEvent) => void;
  onComponentChange?: (changed: { instance: Webform; component: Webform; value: any; flags: any }) => void;
  onSubmit?: (submission: SubmissionType<Data>, saved?: boolean) => void;
  onAsyncSubmit?: (submission: SubmissionType<Data>) => void;
  onSubmitDone?: (submission: SubmissionType<Data>) => void;
  onSubmitError?: (error: EventError) => void;
  onFormLoad?: (form: JSON) => void;
  onError?: (error: EventError | false) => void;
  onRender?: (param: any) => void;
  onAttach?: (param: any) => void;
  onBuild?: (param: any) => void;
  onFocus?: (instance: Webform) => void;
  onBlur?: (instance: Webform) => void;
  onInitialized?: () => void;
  onLanguageChanged?: () => void;
  onBeforeSetSubmission?: (submission: SubmissionType<Data>) => void;
  onSaveDraftBegin?: () => void;
  onSaveDraft?: (submission: SubmissionType<Data>) => void;
  onRestoreDraft?: (submission: SubmissionType<Data> | null) => void;
  onSubmissionDeleted?: (submission: SubmissionType<Data>) => void;
  onRequestDone?: () => void;
  otherEvents?: {
    [event: string]: (...args: any[]) => void;
  };
}

const getDefaultEmitter = () => {
  return new EventEmitter2({
    wildcard: false,
    maxListeners: 0
  });
};

function onAnyEvent<Data extends object = JSONRecord>(
  handlers: Omit<
    UseFormProps<Data>,
    "src" | "url" | "form" | "submission" | "defaultSubmission" | "options" | "formReady" | "formioform" | "Formio"
  >,
  ...args: [string, ...any[]]
) {
  const [event, ...outputArgs] = args;

  if (event.startsWith("formio.")) {
    const funcName = `on${event.charAt(7).toUpperCase()}${event.slice(8)}`;

    if (typeof (handlers as any)[funcName] === "function") {
      (handlers as any)[funcName](...outputArgs);
    }
  }
  if (typeof handlers.otherEvents?.[event] === "function") {
    handlers.otherEvents[event](...outputArgs);
  }
}

const createWebformInstance = async (
  FormConstructor: any | undefined,
  formSource: any,
  element: HTMLDivElement,
  options: FormOptions = {}
) => {
  if (!options?.events) {
    options.events = getDefaultEmitter();
  }

  if (typeof formSource !== "string") {
    formSource = structuredClone(formSource);
  }

  const promise = new FormConstructor(element, formSource, options);
  const webform = await promise.ready;

  webform.toJSON = () => ({ __WEBFORM__: true });

  return webform;
};

// Define effective props (aka I want to rename these props but also maintain backwards compatibility)
function getEffectiveProps<Data extends object = JSONRecord>(props: UseFormProps<Data>) {
  const { FormClass = Form, form, src, url, options, submission, defaultSubmission, onFormReady, onAsyncSubmit, ...handlers } = props;

  return {
    FormClass,
    formSource: form !== undefined ? form : src,
    handlers,
    options,
    url,
    submission,
    defaultSubmission,
    onFormReady,
    onAsyncSubmit
  };
}

function createCustomValidation(customAction: any, ref: MutableRefObject<Webform | null>) {
  return async (submission: SubmissionType, next: (error: null | Error) => void) => {
    try {
      const updatedSubmission = await customAction(submission);

      next(null);

      // A callback that resolves with nothing keeps the submitted data.
      ref.current.onSubmit(updatedSubmission ?? submission, true);
    } catch (er: any) {
      next(er.errors || er);
    } finally {
      ref.current.submissionInProcess = false;
    }
  };
}

function isSubmissionEcho(current: SubmissionType<any> | undefined, next: SubmissionType<any>, previous: SubmissionType<any> | undefined) {
  if (!current) {
    return false;
  }

  // Only keys sent by the parent (now or in the previous prop) are compared: formio adds its own keys (metadata...)
  // to the instance submission, while a key the parent removed (e.g. `_id`) must still be applied.
  const keys = new Set([...Object.keys(next), ...Object.keys(previous || {})]);

  return [...keys].every((key) => isEqual((current as any)[key], (next as any)[key]));
}

export function useForm<Data extends object = JSONRecord>(props: UseFormProps<Data>) {
  const webformRef = useRef<Webform | null>(null);
  const renderElement = useRef<HTMLDivElement | null>(null);
  const effectiveProps = getEffectiveProps(props);
  const { FormClass, url, submission } = effectiveProps;

  // Only a real change of the schema/options content recreates the formio instance.
  const formSource = useDeepMemo(effectiveProps.formSource);
  const options = useDeepMemo(effectiveProps.options);

  // "Latest ref" pattern: callbacks are read at call time, so they never need to be effect deps.
  // Updated after commit, so an interrupted render never leaks its callbacks.
  const latestProps = useRef(effectiveProps);
  useLayoutEffect(() => {
    latestProps.current = effectiveProps;
  });

  // Last submission content pushed into the instance (from props or at creation).
  const lastSubmission = useRef<SubmissionType<Data> | undefined>(undefined);

  // Bumped for every new instance, so the submission sync also runs after the form is recreated.
  const [instanceVersion, setInstanceVersion] = useState(0);

  useEffect(() => {
    let ignore = false;
    let listener: ((...args: [string, ...any[]]) => void) | null = null;
    const createInstance = async () => {
      if (renderElement.current === null) {
        console.warn("Form element not found");
        return;
      }

      if (typeof formSource === "undefined") {
        console.warn("Form source not found");
        return;
      }

      // Never mutate the caller's options object.
      const opts: FormOptions = { ...(options || {}) };

      // Always installed so `onAsyncSubmit` can be added or removed after mount without recreating the form.
      const userCustomValidation = opts.hooks?.customValidation;
      const asyncSubmitValidation = createCustomValidation(
        (submission: SubmissionType<Data>) => latestProps.current.onAsyncSubmit?.(submission),
        webformRef
      );

      opts.hooks = {
        ...opts.hooks,
        customValidation(this: Webform, submission: SubmissionType, next: (error: null | Error) => void) {
          if (latestProps.current.onAsyncSubmit) {
            return asyncSubmitValidation(submission, next);
          }

          if (userCustomValidation) {
            return userCustomValidation.call(this, submission, next);
          }

          // Same as formio without the hook: continue the normal submit path.
          return next(null);
        }
      };

      const webform = await createWebformInstance(FormClass, formSource, renderElement.current, opts);

      if (webform) {
        if (ignore) {
          webform.destroy(true);
          return;
        }

        const { submission, defaultSubmission, onFormReady } = latestProps.current;
        const initialSubmission = submission ?? defaultSubmission;

        if (typeof formSource === "string") {
          webform.src = formSource;

          // `submission` is applied by the sync effect once the instance is ready.
          if (!submission && defaultSubmission) {
            webform.setSubmission(cloneDeep(defaultSubmission));
          }
        } else if (typeof formSource === "object") {
          if (initialSubmission) {
            // formio mutates the object it receives: never hand it the caller's object
            webform.setSubmission(cloneDeep(initialSubmission));
            lastSubmission.current = cloneDeep(submission);
          }

          if (url) {
            webform.url = url;
          }
        }

        if (onFormReady) {
          onFormReady(webform);
        }

        // Attach a single listener per instance, it always calls the latest handlers.
        listener = (...args: [string, ...any[]]) => {
          onAnyEvent(latestProps.current.handlers, ...args);
        };
        webform.onAny(listener);

        renderElement.current.className = "formio-form-ready";
        webformRef.current = webform;
        setInstanceVersion((version) => version + 1);
      } else {
        console.warn("Failed to create form instance");
      }
    };

    createInstance();

    return () => {
      ignore = true;
      if (webformRef.current) {
        // destroy() does not remove onAny listeners, which matters when options.events is shared
        if (listener) {
          webformRef.current.offAny(listener);
        }
        webformRef.current.destroy(true);
        webformRef.current = null;
      }
      lastSubmission.current = undefined;
    };
  }, [formSource, options, url]);

  useEffect(() => {
    const webform = webformRef.current;

    if (!instanceVersion || !webform || !submission) {
      return;
    }

    // Same content as the last one we applied: the parent only re-rendered.
    if (lastSubmission.current && isEqual(lastSubmission.current, submission)) {
      return;
    }

    const previousSubmission = lastSubmission.current;
    lastSubmission.current = cloneDeep(submission);

    // Echo of the user's own input (controlled usage via onChange -> setState).
    // Metadata (_id, state...) must match too, or switching records with identical data would be skipped.
    if (isSubmissionEcho(webform.submission, submission, previousSubmission)) {
      return;
    }

    webform.setSubmission(cloneDeep(submission));
  }, [instanceVersion, submission]);

  return {
    element: renderElement,
    instance: webformRef.current
  };
}
