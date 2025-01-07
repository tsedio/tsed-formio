import classnames from "classnames";
import { PropsWithChildren } from "react";

import { iconClass } from "../../utils/iconClass";

export interface LoaderProps {
  isActive?: boolean;
  color?: string;
  icon?: string;
  className?: string;
}

export function Loader({ isActive, color = "text-primary", icon = "radio-circle", className = "" }: PropsWithChildren<LoaderProps>) {
  if (isActive) {
    return (
      <div
        className={classnames(
          "opacity-85 z-20 flex items-center justify-center p-5 absolute top-0 right-0 left-0 bottom-0 bg-white",
          className
        )}
      >
        <span data-testid={`icon_${icon}`} className={`text-8xl ${color} ${iconClass(undefined, icon, true)}`} />
      </div>
    );
  }
  return null;
}
