import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { registerComponent } from "../../../registries/components";
import { getEventValue } from "../../../utils/getEventValue";
import { cleanFormControlProps, FormControl } from "../form-control/FormControl";
import { InputTextProps } from "./InputText.interface";

export function InputText<Data = any>(props: InputTextProps<Data>) {
  const {
    name,
    id = name,
    value,
    label,
    onChange,
    required,
    size,
    type,
    before,
    after,
    description,
    className,
    placeholder,
    debounceDelay = 300,
    ...otherProps
  } = props;

  const [localValue, setValue] = useState(value);
  const change = useDebouncedCallback(onChange || (() => {}), debounceDelay);

  useEffect(() => {
    setValue(value);
  }, [value]);

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
      <input
        {...cleanFormControlProps(otherProps)}
        type={type || "text"}
        data-testid={`input_${name}`}
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
    </FormControl>
  );
}

registerComponent("InputText", InputText);
