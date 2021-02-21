import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import { FormSchema } from "../../interfaces/FormSchema";
import { InputTags } from "../input-tags/inputTags.component";
import { InputText } from "../input-text/inputText.component";
import { Select } from "../select/select.component";

export const defaultDisplayChoices = [
  { label: "Form", value: "form" },
  { label: "Wizard", value: "wizard" },
  { label: "Pdf", value: "pdf" }
];

export interface FormSettingsProps {
  onChange?: (name: string, value: any) => void;
  form: Partial<FormSchema>;
  typeChoices?: { label: string; value: any }[];
  displayChoices?: { label: string; value: any }[];
  enableTags?: boolean;
  className?: string;
}

export function FormSettings({
  onChange,
  form,
  enableTags = true,
  typeChoices = [],
  displayChoices = defaultDisplayChoices,
  className = ""
}: FormSettingsProps): ReactElement {
  const hasTypeChoices = typeChoices && typeChoices.length > 1;

  return (
    <div className={`form-edit__settings ${className}`}>
      <div className={"w-1/3"}>
        <InputText
          label={"Title"}
          placeholder='Enter the form title'
          name={"title"}
          required={true}
          value={form.title}
          onChange={onChange}
        />
      </div>
      <div className={"w-1/3"}>
        <InputText
          label={"Name"}
          placeholder='Enter the form machine name'
          name={"name"}
          required={true}
          value={form.name}
          onChange={onChange}
        />
      </div>
      <div className={"w-1/3"}>
        <InputText
          label={"Path"}
          placeholder='example'
          prefix={
            <span className={"text-xxs"}>{window.location.origin + "/"}</span>
          }
          name={"path"}
          required={true}
          value={form.path}
          style={{ textTransform: "lowercase", width: "120px" }}
          onChange={onChange}
        />
      </div>
      <div className={"w-1/3"}>
        <Select
          label={"Display as"}
          name={"display"}
          value={form.display}
          choices={displayChoices}
          onChange={onChange}
        />
      </div>
      <div className={"w-1/3"}>
        {hasTypeChoices && (
          <Select
            label={"Type"}
            name={"type"}
            value={form.type}
            choices={typeChoices}
            onChange={onChange}
          />
        )}
      </div>
      <div className={"w-1/3"}>
        {enableTags && (
          <InputTags
            label={"Tags"}
            name={"tags"}
            value={form.tags}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

FormSettings.propTypes = {
  onChange: PropTypes.func,
  form: PropTypes.object,
  enableTags: PropTypes.bool,
  typeChoices: PropTypes.array,
  displayChoices: PropTypes.array,
  className: PropTypes.string
};