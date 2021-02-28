import PropTypes from "prop-types";
import React from "react";
import { FormOptions, FormSchema } from "../../interfaces";
import { FormBuilder } from "../form-builder/formBuilder.component";
import { FormEditCTAs } from "./formCtas.component";
import { FormSettings } from "./formSettings.component";
import { useForm } from "./useForm.hook";

export interface FormEditProps extends Record<string, unknown> {
  form?: Partial<FormSchema>;
  options?: FormOptions;
  typeChoices?: { label: string; value: any }[];
  displayChoices?: { label: string; value: any }[];
  enableTags?: boolean;
  onSubmit?: (form: FormSchema) => void;
  onCopy?: (form: FormSchema) => void;
  builder?: any;
}

export function FormEdit(props: FormEditProps) {
  const {
    form,
    isValid,
    setChange,
    hasRedo,
    hasChanged,
    hasUndo,
    redo,
    undo,
    reset,
    onSubmit,
    onCopy
  } = useForm(props);
  const { options = {}, builder } = props;

  return (
    <div>
      <div className='form-edit'>
        <FormSettings
          {...props}
          className={""}
          key={`form-settings-${form._id}`}
          form={form}
          onChange={setChange}
        />
        <FormEditCTAs
          {...props}
          className={""}
          key={`form-edit-ctas-${form._id}`}
          options={options}
          hasRedo={hasRedo}
          hasUndo={hasUndo}
          disabled={!(isValid && hasChanged)}
          onRedo={redo}
          onUndo={undo}
          onReset={reset}
          onCopy={onCopy}
          onSubmit={onSubmit}
        />
      </div>

      <FormBuilder
        key={`form-builder-${form._id}`}
        components={form.components}
        display={form.display}
        options={options}
        builder={builder}
        onChange={(components) => {
          setChange("components", components);
        }}
      />
    </div>
  );
}

FormEdit.propTypes = {
  form: PropTypes.object.isRequired,
  options: PropTypes.object,
  typeChoices: PropTypes.array,
  displayChoices: PropTypes.array,
  enableTags: PropTypes.bool,
  onSubmit: PropTypes.func
};
