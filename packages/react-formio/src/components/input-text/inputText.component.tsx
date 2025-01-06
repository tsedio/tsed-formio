import classnames from "classnames";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { getEventValue } from "../../utils/getEventValue";
import { FormControl, FormControlProps } from "../form-control/formControl.component";

export interface InputTextProps<Data = any> extends FormControlProps<Data> {
  type?: string;
  value?: Data;
  /**
   * The input size
   */
  size?: string;
  onChange?: (name: string, value: Data) => void;
  placeholder?: string;
  debounceDelay?: number;

  [key: string]: any;
}

export function InputText<T = any>({
  name,
  value,
  label,
  onChange,
  required,
  size,
  type,
  prefix,
  suffix,
  description,
  className,
  placeholder,
  debounceDelay = 300,
  ...props
}: InputTextProps<T>) {
  const [localValue, setValue] = useState(value);
  const change = useDebouncedCallback(onChange || (() => {}), debounceDelay);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <FormControl
      name={name}
      label={label}
      required={required}
      description={description}
      prefix={prefix}
      suffix={suffix}
      className={className}
    >
      <input
        type={type || "text"}
        {...props}
        data-testid={`input_${name}`}
        className={classnames("form-control", size && `form-control-${size}`)}
        id={name}
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
