import FormioForm from "formiojs/Form";
import { get } from "lodash";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import { useEffect, useRef } from "react";
import { callLast } from "../../utils/callLast";

export const useForm = (props: any): any => {
  const { src, form, options = {}, submission, url, ...funcs } = props;
  const element = useRef<any>();
  const isLoaded = useRef<boolean>();
  const instance = useRef<any>();
  const events = useRef<Map<string, any>>(new Map());

  const createWebForm = (srcOrForm: any, options: any) => {
    options = Object.assign({}, options);
    srcOrForm =
      typeof srcOrForm === "string" ? srcOrForm : cloneDeep(srcOrForm);

    if (!instance.current) {
      isLoaded.current = false;
      instance.current = new FormioForm(element.current, srcOrForm, options);

      instance.current.onAny((event: string, ...args: any[]): void => {
        if (!instance.current) {
          return;
        }

        if (event.startsWith("formio.")) {
          const funcName = `on${event.charAt(7).toUpperCase()}${event.slice(
            8
          )}`;

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
        submission && (formio.submission = submission);

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
        submission && (formio.submission = submission);
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
        instance.current.destroy(true);
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
      instance.current && instance.current.destroy(true);
    };
  }, []);

  return {
    element
  };
};
