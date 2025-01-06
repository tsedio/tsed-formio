import { EventEmitter2 } from "eventemitter2";
import { Form } from "formiojs";
import { type MutableRefObject, useEffect, useRef, useState } from "react";

import type { ChangedSubmission, ComponentType, FormOptions, FormType, JSON, SubmissionType } from "../../interfaces";
import { FormCustomEvent } from "./types";

type Webform = any;
type EventError = string | Error | Error[] | { message: string } | { message: string }[];

export interface UseFormProps<Data extends { [key: string]: JSON } = { [key: string]: JSON }> {
  src?: string;
  url?: string;
  form?: FormType;
  submission?: SubmissionType;
  // TODO: once events is typed correctly in @formio/js options, we can remove this override
  options?: FormOptions;
  FormClass?: any;
  onFormReady?: (instance: Webform) => void;
  onPrevPage?: (page: number, submission: SubmissionType) => void;
  onNextPage?: (page: number, submission: SubmissionType) => void;
  onCancelSubmit?: () => void;
  onCancelComponent?: (component: ComponentType) => void;
  onChange?: (value: ChangedSubmission<Data>, flags: any, modified: boolean) => void;
  onCustomEvent?: (event: FormCustomEvent) => void;
  onComponentChange?: (changed: { instance: Webform; component: Webform; value: any; flags: any }) => void;
  onSubmit?: (submission: SubmissionType, saved?: boolean) => void;
  onAsyncSubmit?: (submission: SubmissionType) => void;
  onSubmitDone?: (submission: SubmissionType) => void;
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
  onBeforeSetSubmission?: (submission: SubmissionType) => void;
  onSaveDraftBegin?: () => void;
  onSaveDraft?: (submission: SubmissionType) => void;
  onRestoreDraft?: (submission: SubmissionType | null) => void;
  onSubmissionDeleted?: (submission: SubmissionType) => void;
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

function onAnyEvent<Data extends { [key: string]: JSON } = { [key: string]: JSON }>(
  handlers: Omit<UseFormProps<Data>, "src" | "url" | "form" | "submission" | "options" | "formReady" | "formioform" | "Formio">,
  ...args: [string, ...any[]]
) {
  const [event, ...outputArgs] = args;

  if (event.startsWith("formio.")) {
    const funcName = `on${event.charAt(7).toUpperCase()}${event.slice(8)}`;

    if (funcName in handlers) {
      (handlers as any)[funcName](...outputArgs);
    }
  }
  if (handlers.otherEvents && handlers.otherEvents[event]) {
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
function getEffectiveProps<Data extends { [key: string]: JSON } = { [key: string]: JSON }>(props: UseFormProps<Data>) {
  const { FormClass = Form, form, src, url, options, submission, onFormReady, onAsyncSubmit, ...handlers } = props;

  return {
    FormClass,
    formSource: form !== undefined ? form : src,
    handlers,
    options,
    url,
    submission,
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

export function useForm<Data extends { [key: string]: JSON } = { [key: string]: JSON }>(props: UseFormProps<Data>) {
  const webformRef = useRef<Webform | null>(null);
  const renderElement = useRef<HTMLDivElement | null>(null);
  const { formSource, FormClass, options, url, submission, handlers, onFormReady, onAsyncSubmit } = getEffectiveProps(props);

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

      let opts = options || {};

      if (onAsyncSubmit) {
        opts.hooks = opts.hooks || {};
        opts.hooks.customValidation = createCustomValidation(props.onAsyncSubmit, webformRef);
      }

      const webform = await createWebformInstance(FormClass, formSource, renderElement.current, options);

      if (webform) {
        if (ignore) {
          webform.destroy(true);
          return;
        }

        if (typeof formSource === "string") {
          webform.src = formSource;
        } else if (typeof formSource === "object") {
          if (submission) {
            webform.setSubmission(submission);
          }

          if (url) {
            webform.url = url;
          }
        }

        if (onFormReady) {
          onFormReady(webform);
        }

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
      }
    };
  }, [formSource, url]);

  useEffect(() => {
    if (instanceIsReady && webformRef.current && Object.keys(handlers).length > 0) {
      webformRef.current.onAny((...args: [string, ...any[]]) => {
        instanceIsReady && onAnyEvent(handlers, ...args);
      });
    }

    return () => {
      if (instanceIsReady && webformRef.current && Object.keys(handlers).length > 0) {
        webformRef.current.offAny((...args: [string, ...any[]]) => onAnyEvent(handlers, ...args));
      }
    };
  }, [instanceIsReady, handlers]);

  useEffect(() => {
    if (instanceIsReady && webformRef.current && submission) {
      webformRef.current.setSubmission(submission);
    }
  }, [instanceIsReady, submission]);

  return {
    element: renderElement,
    instance: webformRef.current
  };
}
