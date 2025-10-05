import cx from "classnames";
import type { ComponentPropsWithoutRef } from "react";

import { registerComponent } from "../../registries/components";
import { iconClass } from "../../utils/iconClass";

export interface IconProps extends ComponentPropsWithoutRef<"i"> {
  iconset?: string;
  spinning?: boolean;
  name: string;
}

export function Icon({ iconset, name, className, spinning, ...props }: IconProps) {
  const textClasses = className
    ?.split(" ")
    .filter((cls) => cls.startsWith("text-"))
    .join(" ");

  return (
    <span className={cx(textClasses, "wrapper-icon")}>
      <i {...props} className={cx(iconClass(iconset, name, spinning), className)} />
    </span>
  );
}

registerComponent("Icon", Icon);
