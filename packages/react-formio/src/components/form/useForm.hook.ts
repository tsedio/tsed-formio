import FormioForm from "formiojs/Form";
import { useEffect, useRef } from "react";
import { callLast } from "../../utils/callLast";

export const useForm = ({
  src,
  form,
  options = {},
  submission,
  url,
  getDefaultEmitter,
  ...props
}: any): any => {
  const element = useRef<any>();
  const formio = useRef<any>();
  const instance = useRef<any>();

  useEffect(
    () => () => (formio.current ? formio.current.destroy(true) : null),
    [formio]
  );

  const createWebFormInstance = async (srcOrForm: any): Promise<any> => {
    const { formioform, formReady } = props;
    instance.current = new (formioform || FormioForm)(
      element.current,
      srcOrForm,
      options
    );

    const formioInstance = await instance.current.ready;
    formio.current = formioInstance;

    if (formReady) {
      formReady(formioInstance);
    }

    return formio.current;
  };

  const onAnyEvent = (event: string, ...args: any[]): void => {
    if (event.startsWith("formio.")) {
      const funcName = `on${event.charAt(7).toUpperCase()}${event.slice(8)}`;
      if (
        // eslint-disable-next-line no-prototype-builtins
        props.hasOwnProperty(funcName) &&
        typeof props[funcName] === "function"
      ) {
        props[funcName](...args);
      }
    }
  };

  const initializeFormio = (): void => {
    if (instance.current && instance.current.ready) {
      instance.current.onAny(callLast(onAnyEvent, 200));
      if (submission) {
        formio.current.submission = submission;
      }
    }
  };

  useEffect(() => {
    if (src) {
      createWebFormInstance(src)
        .then((formio) => {
          formio.src = src;

          return formio;
        })
        .then(() => initializeFormio());
    }
  }, [src]);

  useEffect(() => {
    if (form) {
      createWebFormInstance(form)
        .then((formio) => {
          formio.form = form;

          if (url) {
            formio.url = url;
          }

          return formio;
        })
        .then(() => initializeFormio());
    }
  }, [form]);

  useEffect(() => {
    const { events } = options || {};
    if (!events) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      options.events = getDefaultEmitter();
    }
  }, [options]);

  useEffect(() => {
    if (formio.current && submission) {
      formio.current.submission = submission;
    }
  }, [submission]);

  return { element };
};
