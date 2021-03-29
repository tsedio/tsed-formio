import FormioForm from "formiojs/Form";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
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
  const lastChange = useRef<any>(null);
  const isLoaded = useRef<any>(false);

  useEffect(
    () => () => {
      isLoaded.current = false;
      return formio.current ? formio.current.destroy(true) : null;
    },
    [formio]
  );

  const onAnyEvent = (event: string, ...args: any[]): void => {
    if (event.startsWith("formio.")) {
      const funcName = `on${event.charAt(7).toUpperCase()}${event.slice(8)}`;

      if (funcName === "onChange") {
        if (!isLoaded.current || isEqual(args[0]?.data, lastChange.current)) {
          return;
        }

        lastChange.current = cloneDeep(args[0].data);
      }

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
      if (formio.current && submission) {
        formio.current.submission = submission;
      }

      instance.current.onAny(onAnyEvent);
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
      lastChange.current = cloneDeep(submission?.data);
      formio.current.submission = submission;
    }

    return formio.current;
  };

  useEffect(() => {
    if (src) {
      createWebFormInstance(src).then((formio) => {
        formio.src = src;
        isLoaded.current = true;
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

        isLoaded.current = true;

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
      lastChange.current = cloneDeep(submission?.data);
      formio.current.submission = submission;
    }
  }, [submission]);

  return { element };
};
