import { ReactElement } from "react";

import type { FormType } from "../../../interfaces";
import { InputTags } from "../../../molecules/forms/input-tags/InputTags";
import { InputText as DefaultInputText } from "../../../molecules/forms/input-text/InputText";
import { Select as DefaultSelect } from "../../../molecules/forms/select/Select";
import { getComponent, registerComponent } from "../../../registries/components";

export const defaultDisplayChoices = [
  { label: "Form", value: "form" },
  { label: "Wizard", value: "wizard" },
  { label: "Pdf", value: "pdf" }
];

export interface FormParametersProps {
  onChange?: (name: string | undefined, value: any) => void;
  form: Partial<FormType>;
  typeChoices?: { label: string; value: any }[];
  displayChoices?: { label: string; value: any }[];
  enableTags?: boolean;
  className?: string;
  baseUrl?: string;
  readonly?: Record<string, boolean>;
}

export function FormParameters({
  onChange,
  form,
  enableTags = true,
  typeChoices = [],
  displayChoices = defaultDisplayChoices,
  className = "",
  readonly = {},
  baseUrl = window.location.origin
}: FormParametersProps): ReactElement {
  const hasTypeChoices = typeChoices && typeChoices.length > 1;

  const InputText = getComponent<typeof DefaultInputText>("InputText");
  const Select = getComponent<typeof DefaultSelect>("Select");

  return (
    <div className={`form-edit__settings ${className}`}>
      <div>
        <InputText
          label={"Title"}
          placeholder='Enter the form title'
          name={"title"}
          required={true}
          value={form.title}
          disabled={readonly["title"]}
          onChange={onChange}
        />
      </div>
      <div>
        <InputText
          label={"Name"}
          placeholder='Enter the form machine name'
          name={"name"}
          required={true}
          disabled={readonly["name"]}
          value={form.name}
          onChange={onChange}
        />
      </div>
      <div>
        <InputText
          label={"Path"}
          placeholder='example'
          name={"path"}
          className={"mb-0"}
          description={
            <span className={"text-xxs flex items-center"}>
              <i className={"bx bx-link ml-1 mr-1"} />
              {`${baseUrl}/${form.path}`}
            </span>
          }
          required={true}
          value={form.path}
          disabled={readonly["path"]}
          style={{ textTransform: "lowercase", width: "120px" }}
          onChange={onChange}
        />
      </div>
      <div>
        <Select
          label={"Display as"}
          name={"display"}
          disabled={readonly["display"]}
          value={form.display}
          options={displayChoices}
          onChange={onChange}
        />
      </div>
      {hasTypeChoices && (
        <div>
          <Select label={"Type"} name={"type"} value={form.type} options={typeChoices} onChange={onChange} />
        </div>
      )}
      {enableTags && (
        <div>
          <InputTags label={"Tags"} name={"tags"} value={form.tags} onChange={onChange} />
        </div>
      )}
    </div>
  );
}

registerComponent("FormParameters", FormParameters);
