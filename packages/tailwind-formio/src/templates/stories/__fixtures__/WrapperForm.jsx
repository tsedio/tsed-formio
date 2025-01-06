import { Form } from "formiojs";
import cloneDeep from "lodash/cloneDeep";
import React, { useEffect, useRef } from "react";

function createCustomValidation(customAction, ref) {
  return async (submission, next) => {
    try {
      const updatedSubmission = await customAction(submission);

      next(null);

      ref.current.onSubmit(updatedSubmission, true);
    } catch (er) {
      next(er.errors || er);
    } finally {
      ref.current.submissionInProcess = false;
    }
  };
}

function listenEvents(props, webform) {
  Object.keys(props).forEach((key) => {
    if (key.startsWith("on") && key !== "onAsyncSubmit") {
      // remove first 2 characters and lowercase the first letter
      const eventName = key.charAt(2).toLowerCase() + key.slice(3);

      webform.on(eventName, props[key]);
    }
  });
}

function useForm({ options, form, src, FormClass = Form, submission, ...props }) {
  const renderElement = useRef();
  const instanceRef = useRef();
  const webFormRef = useRef();

  useEffect(() => {
    if (renderElement.current === null) {
      console.warn("Form element not found");
      return;
    }

    if (!form && !src) {
      console.warn("Form source not found");
      return;
    }

    let opts = options || {};

    if (props.onAsyncSubmit) {
      opts.hooks = opts.hooks || {};
      opts.hooks.customValidation = createCustomValidation(props.onAsyncSubmit, webFormRef);
    }

    const formio = new FormClass(renderElement.current, form ? cloneDeep(form) : src, opts);
    formio.toJSON = () => ({ __FORM__: true });

    formio.ready.then((webform) => {
      webFormRef.current = webform;
      // FIX to avoid JSON.stringify circular reference
      webform.toJSON = () => ({ __WEBFORM__: true });

      console.log("Created form");

      if (submission) {
        webform.setSubmission(submission);
      }

      listenEvents(props, webform);

      renderElement.current.className = "formio-form-ready";
      instanceRef.current = webform;

      if (props.onFormReady) {
        // FIX for unit test when onFormReady is a stub
        props.onFormReady(webform);
      }
    });

    return () => {
      return formio.destroy(true);
    };
  }, [form, src]);

  useEffect(() => {
    if (submission && instanceRef.current) {
      console.log("Setting submission", submission);
      webFormRef.current.setSubmission(submission);
    }
  }, [submission]);

  return { element: renderElement };
}

export function WrapperForm({ className, style, ...props }) {
  const { element } = useForm(props);

  return (
    <div className={className} style={style}>
      <div data-testid='formio-container' ref={element} />
    </div>
  );
}
