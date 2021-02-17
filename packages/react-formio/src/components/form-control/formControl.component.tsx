import PropTypes from "prop-types";
import React, { ReactElement } from "react";

export interface FormControlProps {
  children?: ReactElement | ReactElement[];
  name: string;
  required?: boolean;
  label?: string;
}

export function FormControl({
  children,
  name,
  required,
  label
}: FormControlProps) {
  return (
    <div id={`form-group-${name}`} className='form-group'>
      <label
        htmlFor={name}
        className={`col-form-label ${required ? " field-required" : ""}`}
      >
        {label}
      </label>
      <div className='input-group'>{children}</div>
    </div>
  );
}

FormControl.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
  required: PropTypes.bool
};
