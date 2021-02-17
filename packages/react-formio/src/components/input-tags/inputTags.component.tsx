import Choices from "choices.js";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import uniq from "lodash/uniq";
import { FormControlProps } from "../form-control/formControl.component";

export interface InputTagsProps<T = any> extends FormControlProps {
  value?: T;
  onChange?: (name: string, value: T) => void;
  placeholder?: string;

  [key: string]: any;
}

export function InputTags({
  name,
  value = [],
  label,
  onChange,
  required,
  ...props
}: InputTagsProps) {
  const ref = useRef();

  useEffect(() => {
    const instance = new Choices(ref.current, {
      delimiter: ",",
      editItems: true,
      removeItemButton: true
    });

    instance.setValue(value);

    instance.passedElement.element.addEventListener("addItem", (event: any) => {
      onChange(name, uniq(value.concat(event.detail.value)));
    });

    instance.passedElement.element.addEventListener(
      "removeItem",
      (event: any) => {
        onChange(name, value.filter(event.detail.value));
      }
    );

    return () => {
      instance.destroy();
    };
  }, [ref, name, value, onChange]);

  return (
    <div id={`form-group-${name}`} className='form-group'>
      <label
        htmlFor={name}
        className={`col-form-label ${required ? " field-required" : ""}`}
      >
        {label}
      </label>
      <input ref={ref} type='text' {...props} id={name} required={required} />
    </div>
  );
}

InputTags.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.array,
  required: PropTypes.bool,
  onChange: PropTypes.func
};
