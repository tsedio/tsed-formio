import { ExtendedComponentSchema, Form } from "formiojs";
import { get } from "lodash";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import { useEffect, useRef } from "react";
import { callLast } from "../../utils/callLast";
import { FormOptions, FormSchema, Submission } from "../../interfaces";

export interface ChangedSubmission<T = any> extends Submission<T> {
  changed: any;
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
  onPrevPage?: (obj: FormPageChangeProps<Data>) => void;
  onNextPage?: (obj: FormPageChangeProps<Data>) => void;
  onCancel?: Function;
  onChange?: (submission: ChangedSubmission) => void;
  onCustomEvent?: (obj: { type: string; event: string; component: ExtendedComponentSchema; data: any }) => void;
  onComponentChange?: (component: ExtendedComponentSchema) => void;
  onSubmit?: (submission: Submission<Data>) => void;
  onSubmitDone?: (submission: Submission<Data>) => void;
  onFormLoad?: Function;
  onError?: (errors: any) => void;
  onRender?: () => void;
  onAttach?: Function;
  onBuild?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onInitialized?: Function;
  onFormReady?: (formio: Form) => void;
  formioform?: any;
}

export function useForm<Data = any>(props: UseFormHookProps<Data>) {
  const { src, form, options = {}, submission, url, ...funcs } = props;
  const element = useRef<any>();
  const isLoaded = useRef<boolean>();
  const instance = useRef<Form>();
  const events = useRef<Map<string, any>>(new Map());

  const createWebForm = (srcOrForm: any, options: any) => {
    options = Object.assign({}, options);
    srcOrForm = typeof srcOrForm === "string" ? srcOrForm : cloneDeep(srcOrForm);

    if (!instance.current) {
      isLoaded.current = false;
      instance.current = new Form(element.current, srcOrForm, options);

      instance.current.onAny((event: string, ...args: any[]): void => {
        if (!instance.current) {
          return;
        }

        if (event.startsWith("formio.")) {
          const funcName = `on${event.charAt(7).toUpperCase()}${event.slice(8)}`;

          if (funcName === "onChange") {
            if (isEqual(get(submission, "data"), args[0].data)) {
              return;
            }
          }

          if (
            // eslint-disable-next-line no-prototype-builtins
            props.hasOwnProperty(funcName) &&
            typeof funcs[funcName] === "function"
          ) {
            if (!events.current.has(funcName)) {
              const fn = callLast(funcs[funcName], 100);
              events.current.set(funcName, fn);
            }
            events.current.get(funcName)(...args);
          }
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

  useEffect(() => {
    props.onSubmit && events.current.set("onSubmit", props.onSubmit);
  }, [props.onSubmit, events]);

  useEffect(() => {
    props.onSubmitDone && events.current.set("onSubmitDone", props.onSubmitDone);
  }, [props.onSubmitDone, events]);

  return {
    element
  };
}
