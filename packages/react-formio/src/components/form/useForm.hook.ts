import { ExtendedComponentSchema, Form } from "formiojs";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import { useEffect, useRef } from "react";

import { FormOptions, FormSchema, Submission } from "../../interfaces";

export interface ChangedSubmission<T = any> extends Submission<T> {
  changed: {
    component: ExtendedComponentSchema;
    instance: any;
    value: any;
  } & Record<string, any>;
  isValid: boolean;
}

export interface FormPageChangeProps<Data = any> {
  page: number;
  submission: Submission<Data>;
}

export interface UseFormHookProps<Data = any> extends Record<string, any> {
  src?: string;
  /**
   * url to fetch form
   */
  url?: string;
  /**
   * Raw form object
   */
  form?: Partial<FormSchema>;
  /**
   * Configuration option
   */
  options?: FormOptions;
  /**
   * Data submission
   */
  submission?: Submission<Data>;

  /// events
  onPrevPage?: (obj: FormPageChangeProps<Data>) => void;
  onNextPage?: (obj: FormPageChangeProps<Data>) => void;
  onCancel?: Function;
  onChange?: (submission: ChangedSubmission) => void;
  onCustomEvent?: (obj: { type: string; event: string; component: ExtendedComponentSchema; data: any }) => void;
  onComponentChange?: (component: ExtendedComponentSchema) => void;
  onSubmit?: (submission: Submission<Data>) => void;
  onAsyncSubmit?: (submission: Submission<Data>) => Promise<any>;
  onSubmitDone?: (submission: Submission<Data>) => void;
  onFormLoad?: Function;
  onError?: (errors: any) => void;
  onRender?: () => void;
  onAttach?: Function;
  onBuild?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onInitialized?: Function;
  onFormReady?: (formio: any) => void;
}

function useEvent(event: string, callback: any, events: Map<string, any>) {
  useEffect(() => {
    if (callback) {
      events.set(event, callback);
    }
  }, [callback, event, events]);
}

function useEvents(funcs: any) {
  const events = useRef<Map<string, any>>(new Map());

  const hasEvent = (event: string) => {
    return funcs.hasOwnProperty(event) && typeof funcs[event] === "function";
  };

  const emit = (event: string, ...args: any[]) => {
    if (hasEvent(event)) {
      const fn = events.current.has(event) ? events.current.get(event) : funcs[event];
      return fn(...args);
    }
  };

  useEvent("onBlur", funcs["onBlur"], events.current);
  useEvent("onPrevPage", funcs["onPrevPage"], events.current);
  useEvent("onNextPage", funcs["onNextPage"], events.current);
  useEvent("onCancel", funcs["onCancel"], events.current);
  useEvent("onChange", funcs["onChange"], events.current);
  useEvent("onCustomEvent", funcs["onCustomEvent"], events.current);
  useEvent("onComponentChange", funcs["onComponentChange"], events.current);
  useEvent("onSubmit", funcs["onSubmit"], events.current);
  useEvent("onAsyncSubmit", funcs["onAsyncSubmit"], events.current);
  useEvent("onSubmitDone", funcs["onSubmitDone"], events.current);
  useEvent("onFormLoad", funcs["onFormLoad"], events.current);
  useEvent("onError", funcs["onError"], events.current);
  useEvent("onRender", funcs["onRender"], events.current);
  useEvent("onAttach", funcs["onAttach"], events.current);
  useEvent("onBuild", funcs["onBuild"], events.current);
  useEvent("onFocus", funcs["onFocus"], events.current);
  useEvent("onBlur", funcs["onBlur"], events.current);
  useEvent("onInitialized", funcs["onInitialized"], events.current);

  return { events, emit, hasEvent };
}

export function useForm<Data = any>(props: UseFormHookProps<Data>) {
  const { src, form, options = {}, submission, url, ...funcs } = props;
  const element = useRef<any>();
  const isLoaded = useRef<boolean>();
  const instance = useRef<Form>();
  const { emit, hasEvent } = useEvents(funcs);

  async function customValidation(submission: Submission, callback: (err: Error | null) => void) {
    if (hasEvent("onAsyncSubmit")) {
      try {
        await emit("onAsyncSubmit", submission, instance.current);
      } catch (err) {
        callback(err?.errors || err);
      }
    } else {
      callback(null);
    }
  }

  const createWebForm = (srcOrForm: any, options: any) => {
    options = Object.assign({}, options);
    srcOrForm = typeof srcOrForm === "string" ? srcOrForm : cloneDeep(srcOrForm);

    if (!instance.current) {
      isLoaded.current = false;
      options.hooks = {
        ...(options.hooks || {}),
        customValidation: options?.hooks?.customValidation || customValidation
      };

      instance.current = new Form(element.current, srcOrForm, options);

      instance.current.onAny((event: string, ...args: any[]): void => {
        if (!instance.current) {
          return;
        }

        if (event.startsWith("formio.")) {
          const eventName = `on${event.charAt(7).toUpperCase()}${event.slice(8)}`;

          if (eventName === "onChange" && !args[0].changed) {
            return;
          }

          emit(eventName, ...args, instance.current);
        }
      });

      instance.current.ready.then((formio: any) => {
        submission && (formio.submission = cloneDeep(submission));

        if (props.onFormReady) {
          props.onFormReady(formio);
        }

        isLoaded.current = true;
      });
    }

    return instance.current;
  };

  useEffect(() => {
    if (instance.current) {
      instance.current.ready.then((formio: any) => {
        if (isEqual(formio.submission.data, submission?.data)) {
          return;
        }

        submission && (formio.submission = cloneDeep(submission));
      });
    }
  }, [submission]);

  useEffect(() => {
    if (form && instance.current) {
      instance.current.ready.then((formio: any) => {
        formio.form = form;
        if (url) {
          formio.url = url;
        }
      });
    }
  }, [form, url]);

  useEffect(() => {
    if (src) {
      if (instance.current) {
        isLoaded.current = false;
        (instance.current as any).destroy(true);
      }

      createWebForm(src, options);
    }
  }, [src]);

  useEffect(() => {
    if (form) {
      createWebForm(form, options);
    }

    return () => {
      isLoaded.current = false;
      instance.current && (instance.current as any).destroy(true);
    };
  }, []);

  return {
    element
  };
}
