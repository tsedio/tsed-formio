import cx from "classnames";
import { type ButtonHTMLAttributes, forwardRef, type LegacyRef, type PropsWithChildren } from "react";

import { registerComponent } from "../../registries/components";

export const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "link",
  "outline-primary",
  "outline-secondary",
  "outline-success",
  "outline-danger",
  "outline-warning",
  "outline-info",
  "outline-light",
  "outline-dark",
  "outline-link"
];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS] | string;
}

export const Button = forwardRef(
  ({ variant, className, children, ...props }: PropsWithChildren<ButtonProps>, ref: LegacyRef<HTMLButtonElement>) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cx(
          "btn flex gap-1",
          {
            disabled: props.disabled
          },
          `btn-${variant}`,
          className
        )}
        disabled={props.disabled}
        onClick={(evt) => !props.disabled && props.onClick?.(evt)}
      >
        {children}
      </button>
    );
  }
);

registerComponent("Button", Button);
