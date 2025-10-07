import classnames from "classnames";
import omit from "lodash/omit";
import { HTMLAttributes, InputHTMLAttributes, PropsWithChildren, ReactNode } from "react";

import { registerComponent } from "../../../registries/components";

export type BaseFormControlProps<Value = unknown> = {
  label?: string;
  description?: string | ReactNode;
  before?: ReactNode | string;
  after?: ReactNode | string;
  shadow?: boolean;
  value?: Value;
  onChange?: (name: string | undefined, value: Value) => void;
  /**
   * The input size
   */
  size?: "small" | string;
};
export type FormControlProps<
  Value = unknown,
  Attributes extends HTMLAttributes<HTMLElement> = InputHTMLAttributes<HTMLInputElement>
> = BaseFormControlProps<Value> & Omit<Attributes, "onChange" | "value" | "size">;

export function cleanFormControlProps(props: FormControlProps, omitted: string[] = []): any {
  return omit(props, ["label", "description", "prefix", "suffix", "size", "shadow", ...omitted]);
}

export function FormControl<Value = unknown>({
  children,
  name = "",
  id = name,
  required,
  before,
  after,
  description,
  label,
  size,
  className
}: PropsWithChildren<FormControlProps<Value>>) {
  return (
    <div
      data-testid={name && `form-group-${name}`}
      id={`form-group-${name || ""}`}
      className={classnames(
        "form-group",
        {
          "-with-before": !!before,
          "-with-after": !!after
        },
        size && `-size-${size}`,
        className
      )}
    >
      {label && (
        <label htmlFor={id} data-testid='form-control-label' className={`col-form-label ${required ? " field-required" : ""}`}>
          {label}
        </label>
      )}
      <div className={"input-group"}>
        {before && (
          <div className='input-group-prepend'>
            <span className='input-group-text' data-testid='form-control-prefix'>
              {before}
            </span>
          </div>
        )}
        {children}
        {after && (
          <div className='input-group-append'>
            <span className='input-group-text' data-testid='form-control-suffix'>
              {after}
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

registerComponent("FormControl", FormControl);
