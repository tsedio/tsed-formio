import classnames from "classnames";
import PropTypes from "prop-types";
import React, {PropsWithChildren} from "react";
import { iconClass } from "../../utils/iconClass";

export interface LoaderProps {
  isActive?: boolean;
  color?: string;
  icon?: string;
  className?: string;
}

export function Loader({
  isActive,
  color = "blue",
  icon = "radio-circle",
  className = ""
}: PropsWithChildren<LoaderProps>) {
  if (isActive) {
    return (
      <div
        className={classnames(
          "opacity-85 z-20 flex items-center justify-center p-5 absolute top-0 right-0 left-0 bottom-0 bg-white",
          className
        )}
      >
        <span
          data-testid={`icon_${icon}`}
          color={color}
          className={`text-11xl ${iconClass(undefined, icon, true)}`}
        />
      </div>
    );
  }
  return null;
}

Loader.propTypes = {
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};
