import Choices from "@formio/choices.js";
import classnames from "classnames";
import React, { type HTMLAttributes, type ReactElement, useEffect, useRef } from "react";

import { getEventValue } from "../../utils/getEventValue";
import { FormControl, FormControlProps } from "../form-control/formControl.component";

export interface SelectProps<Data = any> extends FormControlProps, Omit<HTMLAttributes<HTMLSelectElement>, "onChange" | "prefix"> {
  size?: string;
  placeholder?: string;
  choices: { label: string; value: Data }[];
  layout?: "html5" | "choicesjs";
  disabled?: boolean;
  multiple?: boolean;
}

export function Select<Data = any>({
  name,
  label,
  size,
  onChange,
  required,
  value,
  choices,
  description,
  placeholder,
  prefix,
  suffix,
  multiple,
  layout,
  ...props
}: SelectProps<Data>): ReactElement {
  const ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    let instance: any;

    if (layout === "choicesjs") {
      instance = new Choices(ref.current as unknown as HTMLInputElement, {
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
      {}
      <select
        ref={ref}
        data-testid={`select_${name}`}
        {...props}
        className={classnames("form-control", size && `form-control-${size}`)}
        name={name}
        id={name}
        multiple={multiple}
        value={value || ("" as any)}
        placeholder={placeholder}
        onChange={(event) => {
          onChange && onChange(name, getEventValue(event));
        }}
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
