import FormioForm from "formiojs/Form";
import { useEffect, useRef } from "react";

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
      instance.current.onAny(onAnyEvent);

      if (formio.current && submission) {
        formio.current.submission = submission;
      }
    }
  };

  const createWebFormInstance = async (srcOrForm: any): Promise<any> => {
    const { formioform, onFormReady } = props;
    instance.current = new (formioform || FormioForm)(
      element.current,
      srcOrForm,
      options
    );

    initializeFormio();

    const formioInstance = await instance.current.ready;
    formio.current = formioInstance;

    if (onFormReady) {
      onFormReady(formioInstance);
    }

    if (submission) {
      formio.current.submission = submission;
    }

    return formio.current;
  };

  useEffect(() => {
    if (src) {
      createWebFormInstance(src).then((formio) => {
        formio.src = src;

        return formio;
      });
    }
  }, [src]);

  useEffect(() => {
    if (form) {
      createWebFormInstance(form).then((formio) => {
        formio.form = form;

        if (url) {
          formio.url = url;
        }

        return formio;
      });
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
