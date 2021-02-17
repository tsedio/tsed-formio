import { EventEmitter2 } from "eventemitter2";
import AllComponents from "formiojs/components";
import Components from "formiojs/components/Components";
import FormioForm from "formiojs/Form";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { FormOptions, FormSchema, Submission } from "../../interfaces";
import { callLast } from "../../utils/callLast";

Components.setComponents(AllComponents);

const useFormioRef = ({
  src,
  form,
  options,
  submission,
  url,
  ...props
}: Partial<FormProps>): any => {
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
      options.events = Form.getDefaultEmitter();
    }
  }, [options]);

  useEffect(() => {
    if (formio.current && submission) {
      formio.current.submission = submission;
    }
  }, [submission]);

  return { element };
};

export interface FormProps {
  className: string;
  /**
   *
   */
  src: string;
  /**
   * url to fetch form
   */
  url: string;
  /**
   * Raw form object
   */
  form: Partial<FormSchema>;
  /**
   * Data submission
   */
  submission: Submission;
  /**
   * Configuration option
   */
  options: FormOptions;
  onPrevPage: Function;
  onNextPage: Function;
  onCancel: Function;
  onChange: Function;
  onCustomEvent: Function;
  onComponentChange: Function;
  onSubmit: Function;
  onSubmitDone: Function;
  onFormLoad: Function;
  onError: Function;
  onRender: Function;
  onAttach: Function;
  onBuild: Function;
  onFocus: Function;
  onBlur: Function;
  onInitialized: Function;
  formReady: Function;
  formioform: any;
}

export const Form = (props: Partial<FormProps>) => {
  const { element } = useFormioRef(props);

  return (
    <div
      ref={(el): any => (element.current = el)}
      className={props.className}
    />
  );
};

Form.propTypes = {
  className: PropTypes.string,
  /**
   *
   */
  src: PropTypes.string,
  /**
   * url to fetch form
   */
  url: PropTypes.string,
  /**
   * Raw form object
   */
  form: PropTypes.object,
  /**
   * Data submission
   */
  submission: PropTypes.object,
  /**
   * Configuration option
   */
  options: PropTypes.shape({
    readOnly: PropTypes.bool,
    noAlerts: PropTypes.bool,
    i18n: PropTypes.object,
    template: PropTypes.string,
    saveDraft: PropTypes.bool,
    events: PropTypes.any
  }),
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onCustomEvent: PropTypes.func,
  onComponentChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onSubmitDone: PropTypes.func,
  onFormLoad: PropTypes.func,
  onError: PropTypes.func,
  onRender: PropTypes.func,
  onAttach: PropTypes.func,
  onBuild: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onInitialized: PropTypes.func,
  formReady: PropTypes.func,
  formioform: PropTypes.any
};

Form.getDefaultEmitter = (): EventEmitter2 => {
  return new EventEmitter2({
    wildcard: false,
    maxListeners: 0
  });
};

export default Form;
