import Choices from "choices.js";
import classnames from "classnames";
import PropTypes from "prop-types";
import React, { ReactElement, useEffect, useRef } from "react";
import { getEventValue } from "../../utils/getEventValue";
import { FormControl, FormControlProps } from "../form-control/formControl.component";

export interface SelectProps<T = any> extends FormControlProps {
  value?: any;
  size?: string;
  onChange?: (name: string, value: any) => void;
  placeholder?: string;
  choices: { label: string; value: T }[];
  layout?: "html5" | "choicesjs";
  multiple?: boolean;

  [key: string]: any;
}

export function Select<T = any>({
  name,
  label,
  size,
  onChange,
  required,
  value,
  choices = [],
  description,
  placeholder,
  prefix,
  suffix,
  multiple,
  layout,
  ...props
}: SelectProps<T>): ReactElement {
  const ref = useRef();

  useEffect(() => {
    let instance: any;

    if (layout === "choicesjs") {
      instance = new Choices(ref.current, {
        removeItemButton: true,
        placeholderValue: placeholder
      });
    }

    return () => {
      instance && instance.destroy();
    };
  }, []);

  choices =
    layout === "choicesjs" || multiple || !placeholder
      ? choices
      : ([
          {
            label: placeholder,
            value: ""
          },
          ...choices
        ] as any[]);

  return (
    <FormControl name={name} label={label} required={required} description={description} prefix={prefix} suffix={suffix} shadow={false}>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        ref={ref}
        {...props}
        data-testid={`select_${name}`}
        className={classnames("form-control", size && `form-control-${size}`)}
        name={name}
        id={name}
        multiple={multiple}
        value={value || ("" as any)}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(name, getEventValue(event));
        }}
      >
        {choices.map(({ label, value }) => {
          return (
            <option
              data-testid='select-option'
              key={String(value)}
              label={label}
              value={value as any}
            >
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
