import classnames from "classnames";
import cx from "classnames";
import { type ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { Icon } from "../../atoms/icon/Icon.js";

export interface LoaderProps extends ComponentPropsWithoutRef<"div"> {
  isActive?: boolean;
  color?: string;
  icon?: string;
  iconset?: string;
}

export function Loader({
  isActive,
  color = "text-primary",
  icon = "loader",
  iconset,
  className = "",
  ...props
}: PropsWithChildren<LoaderProps>) {
  if (isActive) {
    return (
      <div
        {...props}
        className={classnames(
          "opacity-85 z-20 flex items-center justify-center p-5 absolute top-0 right-0 left-0 bottom-0 bg-white",
          className
        )}
      >
        <Icon data-testid={`icon_${icon}`} className={cx("text-8xl", color)} iconset={iconset} name={icon} spinning={true} />
      </div>
    );
  }

  return null;
}
