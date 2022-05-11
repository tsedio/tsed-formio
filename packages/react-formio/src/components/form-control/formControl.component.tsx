import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

export interface FormControlProps {
  name: string;
  required?: boolean;
  label?: string;
  className?: string;
  description?: string | React.ComponentType | any;
  prefix?: React.ComponentType | any;
  suffix?: React.ComponentType | any;
  shadow?: boolean;
}

export function FormControl({
  children,
  name,
  required,
  prefix,
  suffix,
  description,
  label,
  className
}: React.PropsWithChildren<FormControlProps>) {
  return (
    <div id={`form-group-${name || ""}`} className={classnames("form-group", className)}>
      {label && (
        <label htmlFor={name} className={`col-form-label ${required ? " field-required" : ""}`}>
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
  description: PropTypes.any
};
