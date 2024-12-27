import classnames from "classnames";
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";

import { callLast } from "../../utils/callLast";
import { getEventValue } from "../../utils/getEventValue";
import { FormControl, FormControlProps } from "../form-control/formControl.component";

export interface InputTextProps<T = any> extends FormControlProps {
  type?: string;
  value?: T;
  /**
   * The input size
   */
  size?: string;
  onChange?: (name: string, value: T) => void;
  placeholder?: string;

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
  ...props
}: InputTextProps<T>) {
  const [localValue, setValue] = useState(value);

  const change = useMemo(() => onChange && callLast(onChange, 300), [onChange]);

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

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  size: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  prefix: PropTypes.any,
  suffix: PropTypes.any
};
