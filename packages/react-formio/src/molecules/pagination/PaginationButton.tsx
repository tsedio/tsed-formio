import classnames from "classnames";
import { PropsWithChildren } from "react";

import { registerComponent } from "../../registries/components";

export function PaginationButton(
  props: PropsWithChildren<
    {
      component?: any;
      disabled?: boolean;
      className?: string;
      active?: boolean;
    } & Record<string, any>
  >
) {
  const { component: Component = "button", children, disabled, active, ...otherProps } = props;

  return (
    <Component
      {...otherProps}
      data-testid='pagination-button'
      disabled={disabled}
      className={classnames("page-link", disabled ? "disabled" : "", active ? "" : "", props.className)}
    >
      {children}
    </Component>
  );
}

registerComponent("PaginationButton", PaginationButton);
