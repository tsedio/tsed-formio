import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import { getEventValue } from "../../utils/getEventValue";
import {
  FormControl,
  FormControlProps
} from "../form-control/formControl.component";

export interface SelectProps<T = any> extends FormControlProps {
  value?: T;
  onChange?: (name: string, value: T) => void;
  placeholder?: string;
  choices: { label: string; value: T }[];

  [key: string]: any;
}

export function Select<T = any>({
  name,
  value,
  label,
  onChange,
  required,
  choices
}: SelectProps<T>): ReactElement {
  return (
    <FormControl name={name} label={label} required={required}>
      <select
        className='form-control'
        name={name}
        id={name}
        value={value || ("" as any)}
        onChange={(event) => onChange("display", getEventValue(event))}
      >
        {choices.map(({ label, value }) => {
          return (
            <option key={String(value)} label={label} value={value as any}>
              {label}
            </option>
          );
        })}
      </select>
    </FormControl>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  choices: PropTypes.array.isRequired
};
