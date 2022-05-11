import AllComponents from "formiojs/components";
import { Components } from "formiojs";
import PropTypes from "prop-types";
import { useForm, UseFormHookProps } from "./useForm.hook";

Components.setComponents(AllComponents);

export interface FormProps<Data = any> extends UseFormHookProps<Data> {
  name?: string;
  /**
   *
   */
  className?: string;
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
