import { ComponentType, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { getComponent, registerComponent } from "../../../registries/components";
import { getEventValue } from "../../../utils/getEventValue";
import { cleanFormControlProps, FormControl } from "../form-control/FormControl";
import { InputTextProps } from "./InputText.interface";

function Input<Data = any>(props: InputTextProps<Data>) {
  const { name, id = name, value, onChange, required, type, placeholder, debounceDelay = 300, ...otherProps } = props;

  const [localValue, setValue] = useState(value);
  const change = useDebouncedCallback(onChange || (() => {}), debounceDelay);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <input
      {...cleanFormControlProps(otherProps, ["className"])}
      type={type || "text"}
      data-testid={`input_${name || ""}`}
      className={"form-control"}
      id={id}
      name={name}
      required={required}
      value={(localValue || "") as any}
      placeholder={placeholder}
      onChange={(event) => {
        const value = getEventValue(event);
        setValue(value);

        return change && change(name, value);
      }}
    />
  );
}

registerComponent("Input", Input);

export function InputText<Data = any>(props: InputTextProps<Data>) {
  const { name, id = name, label, required, size, before, after, description, className } = props;
  const Input = getComponent<ComponentType<InputTextProps<Data>>>("Input");

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
      <Input {...props} />
    </FormControl>
  );
}

registerComponent("InputText", InputText);
