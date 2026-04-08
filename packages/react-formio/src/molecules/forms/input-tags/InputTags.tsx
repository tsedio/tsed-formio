import { ComponentType } from "react";

import { getComponent, registerComponent } from "../../../registries/components";
import { type FormControl as DefaultFormControl } from "../form-control/FormControl";
import type { InputTagsProps } from "./InputTags.interface";

export function InputTags<Data = string>(props: InputTagsProps) {
  const { name, id = name, label, required, description, before, after, size, className, layout = "choicesjs", ...otherProps } = props;

  const FormControl = getComponent<typeof DefaultFormControl>("FormControl");
  const Component = getComponent<ComponentType<InputTagsProps<Data>>>([`InputTags.${layout}`, "Input"]);

  return (
    <FormControl
      id={id}
      name={name}
      label={label}
      required={required}
      description={description}
      before={before}
      after={after}
      size={size}
      className={className}
    >
      <Component {...(otherProps as any)} id={id} name={name} required={required} />
    </FormControl>
  );
}

registerComponent("InputTags", InputTags);
