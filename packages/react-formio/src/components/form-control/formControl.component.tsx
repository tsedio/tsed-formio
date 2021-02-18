import PropTypes from "prop-types";
import React from "react";

export interface FormControlProps {
  name: string;
  required?: boolean;
  label?: string;
  description?: string;
  prefix?: React.ComponentType;
  suffix?: React.ComponentType;
  shadow?: boolean;
}

export function FormControl({
  children,
  name,
  required,
  prefix,
  suffix,
  description,
  label
}: React.PropsWithChildren<FormControlProps>) {
  return (
    <div id={`form-group-${name || ""}`} className='form-group'>
      {label && (
        <label
          htmlFor={name}
          className={`col-form-label ${required ? " field-required" : ""}`}
        >
          {label}
        </label>
      )}
      <div className={"input-group"}>
        {prefix && (
          <div className='input-group-prepend'>
            <span className='input-group-text'>{prefix}</span>
          </div>
        )}
        {children}
        {suffix && (
          <div className='input-group-append'>
            <span className='input-group-text'>{suffix}</span>
          </div>
        )}
      </div>
      {description && <div className='form-text text-muted'>{description}</div>}
    </div>
  );
}

FormControl.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
  required: PropTypes.bool,
  description: PropTypes.bool
};
