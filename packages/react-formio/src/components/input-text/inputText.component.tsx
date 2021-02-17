import PropTypes from "prop-types";
import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { callLast } from "../../utils/callLast";
import { getEventValue } from "../../utils/getEventValue";
import {
  FormControl,
  FormControlProps
} from "../form-control/formControl.component";

export interface InputTextProps<T = any> extends FormControlProps {
  value?: T;
  onChange?: (name: string, value: T) => void;
  prefix?: any;
  suffix?: any;
  placeholder?: string;

  [key: string]: any;
}

export function InputText<T = any>({
  name,
  value,
  label,
  onChange,
  required,
  prefix,
  suffix,
  ...props
}: InputTextProps<T>): ReactElement {
  const [localValue, setValue] = useState(value);

  const change = useMemo(
    () =>
      callLast((name: string, value: T) => {
        onChange(name, value);
      }, 300),
    [onChange]
  );

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <FormControl name={name} label={label} required={required}>
      {prefix && (
        <div className='input-group-prepend'>
          <span className='input-group-text'>{prefix}</span>
        </div>
      )}
      <input
        type='text'
        className='form-control'
        {...props}
        id={name}
        required={required}
        value={(localValue || "") as any}
        onChange={(event) => {
          const value = getEventValue(event);
          setValue(value);

          return change(name, value);
        }}
      />
      {suffix && (
        <div className='input-group-append'>
          <span className='input-group-text'>{suffix}</span>
        </div>
      )}
    </FormControl>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  prefix: PropTypes.any,
  suffix: PropTypes.any
};
