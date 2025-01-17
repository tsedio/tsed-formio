import cx from "classnames";
import type { HTMLAttributes } from "react";

import { registerComponent } from "../../registries/components";
import { iconClass } from "../../utils/iconClass";

export interface IconProps extends HTMLAttributes<HTMLElement> {
  iconset?: string;
  name: string;
}

export function Icon({ iconset, name, className, ...props }: IconProps) {
  return <i {...props} className={cx(iconClass(iconset, name), className)} />;
}

registerComponent("Icon", Icon);
