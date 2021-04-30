import AllComponents from "formiojs/components";
import Components from "formiojs/components/Components";
import PropTypes from "prop-types";
import React from "react";
import { FormOptions, FormSchema, Submission } from "../../interfaces";
import { useForm } from "./useForm.hook";

Components.setComponents(AllComponents);

export interface ChangedSubmission<T = any> extends Submission<T> {
  changed: any;
  isValid: boolean;
}

export interface FormProps {
  name?: string;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  src?: string;
  /**
   * url to fetch form
   */
  url?: string;
  /**
   * Raw form object
   */
  form: Partial<FormSchema>;
  /**
   * Data submission
   */
  submission?: Submission;
  /**
   * Configuration option
   */
  options?: FormOptions;
  onPrevPage?: Function;
  onNextPage?: Function;
  onCancel?: Function;
  onChange?: (submission: ChangedSubmission) => void;
  onCustomEvent?: Function;
  onComponentChange?: Function;
  onSubmit?: Function;
  onSubmitDone?: Function;
  onFormLoad?: Function;
  onError?: Function;
  onRender?: Function;
  onAttach?: Function;
  onBuild?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onInitialized?: Function;
  onFormReady?: (formio: any) => void;
  formioform?: any;
}

export function Form(props: Partial<FormProps>) {
  const { element } = useForm(props);

  return (
    <div
      data-testid={"formioContainer" + (props.name || "")}
      ref={element}
      className={props.className}
    />
  );
}

Form.propTypes = {
  name: PropTypes.string,
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
    i18n: PropTypes.any,
    template: PropTypes.string,
    saveDraft: PropTypes.bool
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
  onFormReady: PropTypes.func,
  formioform: PropTypes.any
};
