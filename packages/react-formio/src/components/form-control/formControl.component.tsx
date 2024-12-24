import classnames from "classnames";
import React, { HTMLAttributes } from "react";

export interface FormControlProps<Data = any> {
  name: string;
  value?: Data;
  required?: boolean;
  label?: string;
  className?: string;
  onChange?: (name: string, value: any) => void;
  description?: string | React.ComponentType | any;
  prefix?: JSX.Element | React.ComponentType | any;
  suffix?: JSX.Element | React.ComponentType | any;
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
    <div data-testid={name && `form-group-${name}`} id={`form-group-${name || ""}`} className={classnames("form-group", className)}>
      {label && (
        <label htmlFor={name} data-testid='form-control-label' className={`col-form-label ${required ? " field-required" : ""}`}>
          {label}
        </label>
      )}
      <div className={"input-group"}>
        {prefix && (
          <div className='input-group-prepend'>
            <span className='input-group-text' data-testid='form-control-prefix'>
              {prefix}
            </span>
          </div>
        )}
        {children}
        {suffix && (
          <div className='input-group-append'>
            <span className='input-group-text' data-testid='form-control-suffix'>
              {suffix}
            </span>
          </div>
        )}
      </div>
      {description && (
        <div data-testid='form-control-description' className='form-text text-muted'>
          {description}
        </div>
      )}
    </div>
  );
}
