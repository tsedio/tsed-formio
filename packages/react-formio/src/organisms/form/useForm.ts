import { Form } from "@formio/js";
import { EventEmitter2 } from "eventemitter2";
import cloneDeep from "lodash/cloneDeep";
import { type MutableRefObject, useEffect, useRef, useState } from "react";

import type { ChangedSubmission, ComponentType, FormOptions, FormType, SubmissionType } from "../../interfaces";
import type { JSON, JSONRecord } from "../../interfaces/JSONRecord.js";
import { FormCustomEvent } from "./types";
import { isDeepEqual, useDeepMemo } from "./useDeepMemo";

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

      ref.current.onSubmit(updatedSubmission, true);
    } catch (er: any) {
      next(er.errors || er);
    } finally {
      ref.current.submissionInProcess = false;
    }
  };
}

function isSubmissionEcho(current: SubmissionType<any> | undefined, next: SubmissionType<any>) {
  if (!current) {
    return false;
  }

  return Object.keys(next).every((key) => isDeepEqual((current as any)[key], (next as any)[key]));
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
  const latestProps = useRef(effectiveProps);
  latestProps.current = effectiveProps;

  // Last submission content pushed into the instance (from props or at creation).
  const lastSubmission = useRef<SubmissionType<Data> | undefined>(undefined);

  const [instanceIsReady, setInstanceIsReady] = useState(false);

  useEffect(() => {
    let ignore = false;
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

      if (latestProps.current.onAsyncSubmit) {
        opts.hooks = {
          ...opts.hooks,
          customValidation: createCustomValidation(
            (submission: SubmissionType<Data>) => latestProps.current.onAsyncSubmit?.(submission),
            webformRef
          )
        };
      }

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
            webform.setSubmission(defaultSubmission);
          }
        } else if (typeof formSource === "object") {
          if (initialSubmission) {
            webform.setSubmission(initialSubmission);
            // formio mutates the object it receives, keep our own snapshot
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
        webform.onAny((...args: [string, ...any[]]) => {
          onAnyEvent(latestProps.current.handlers, ...args);
        });

        renderElement.current.className = "formio-form-ready";
        webformRef.current = webform;
        setInstanceIsReady(true);
      } else {
        console.warn("Failed to create form instance");
      }
    };

    createInstance();

    return () => {
      ignore = true;
      if (webformRef.current) {
        webformRef.current.destroy(true);
        webformRef.current = null;
      }
      lastSubmission.current = undefined;
    };
  }, [formSource, options, url]);

  useEffect(() => {
    const webform = webformRef.current;

    if (!instanceIsReady || !webform || !submission) {
      return;
    }

    // Same content as the last one we applied: the parent only re-rendered.
    if (lastSubmission.current && isDeepEqual(lastSubmission.current, submission)) {
      return;
    }

    lastSubmission.current = cloneDeep(submission);

    // Echo of the user's own input (controlled usage via onChange -> setState).
    // Metadata (_id, state...) must match too, or switching records with identical data would be skipped.
    if (isSubmissionEcho(webform.submission, submission)) {
      return;
    }

    webform.setSubmission(submission);
  }, [instanceIsReady, submission]);

  return {
    element: renderElement,
    instance: webformRef.current
  };
}
