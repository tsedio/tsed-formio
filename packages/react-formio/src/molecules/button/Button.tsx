import cx from "classnames";
import { type ButtonHTMLAttributes, forwardRef, type PropsWithChildren } from "react";

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

interface BaseButtonProps<T extends HTMLElement> extends ButtonHTMLAttributes<T> {
  tag?: "button" | "a" | "input" | "div";
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS] | string;
}

interface HTMLAnchorProps extends BaseButtonProps<HTMLAnchorElement> {
  tag: "a";
}

interface HTMLButtonProps extends BaseButtonProps<HTMLButtonElement> {
  tag?: "button";
}

interface HTMLInputProps extends BaseButtonProps<HTMLInputElement> {
  tag: "input";
}

interface HTMLDivProps extends BaseButtonProps<HTMLDivElement> {
  tag: "div";
}

export type ButtonProps = HTMLAnchorProps | HTMLButtonProps | HTMLInputProps | HTMLDivProps;

export const Button = forwardRef(({ tag: Tag = "button", variant, className, children, ...props }: PropsWithChildren<ButtonProps>, ref) => {
  return (
    <Tag
      {...(props as any)}
      ref={ref as any}
      className={cx(
        "btn flex gap-1",
        {
          disabled: props.disabled
        },
        `btn-${variant}`,
        className
      )}
      disabled={props.disabled}
      onClick={(evt) => !props.disabled && props.onClick?.(evt as any)}
    >
      {children}
    </Tag>
  );
});

Button.displayName = "Button";

registerComponent("Button", Button);
