import Choices from "@formio/choices.js";
import uniq from "lodash/uniq";
import { useEffect, useRef } from "react";

import { FormControl, FormControlProps } from "../form-control/formControl.component";

export interface InputTagsProps<T = any> extends Omit<FormControlProps, "description" | "prefix" | "suffix"> {
  value?: T;
  onChange?: (name: string, value: T) => void;
  placeholder?: string;

  [key: string]: any;
}

export function InputTags({ name, value = [], label, onChange, required, description, prefix, suffix, ...props }: InputTagsProps) {
  const ref: any = useRef();

  useEffect(() => {
    const instance = new Choices(ref.current, {
      delimiter: ",",
      editItems: true,
      removeItemButton: true
    });

    instance.setValue([].concat(value, []));

    instance.passedElement.element.addEventListener("addItem", (event: any) => {
      onChange && onChange(name, uniq(value.concat(event.detail.value)));
    });

    instance.passedElement.element.addEventListener("removeItem", (event: any) => {
      onChange &&
        onChange(
          name,
          value.filter((v: string) => v !== event.detail.value)
        );
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <FormControl name={name} label={label} required={required} description={description} prefix={prefix} suffix={suffix}>
      <input ref={ref} type='text' {...props} id={name} required={required} />
    </FormControl>
  );
}
