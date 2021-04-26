import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
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
}: LoaderProps) {
  return (
    <div className={classnames("opacity-85 z-20 relative", className)}>
      {isActive && (
        <div className='flex items-center justify-center p-5 absolute top-0 right-0 left-0 bottom-0 bg-white'>
          <span
            data-testid={"icon"}
            color={color}
            className={`text-11xl ${iconClass(undefined, icon, true)}`}
          />
        </div>
      )}
    </div>
  );
}

Loader.propTypes = {
  isActive: PropTypes.bool,
  icon: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string
};
