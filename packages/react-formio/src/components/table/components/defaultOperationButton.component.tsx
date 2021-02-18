import classnames from "classnames";
import React from "react";
import { iconClass } from "../../../utils/iconClass";
import { stopPropagationWrapper } from "../../../utils/stopPropagationWrapper";

export interface OperationButtonProps {
  className?: string;
  buttonType?: string;
  buttonSize?: string;
  buttonOutline?: boolean;
  data: any[];
  onClick: (action: string) => void;
  action: string;
  icon?: string;
  title?: string;
  i18n?: (i18n: string) => string;
}

export function DefaultOperationButton(props: OperationButtonProps) {
  const {
    className = "btn",
    buttonSize = "xs",
    buttonType = "primary",
    buttonOutline,
    onClick,
    action,
    icon = "",
    title = "",
    i18n = (f: string) => f
  } = props;

  return (
    <span
      className={classnames(
        className,
        ["btn", buttonOutline && "outline", buttonType]
          .filter(Boolean)
          .join("-"),
        `btn-${buttonSize}`
      )}
      onClick={stopPropagationWrapper(() => onClick(action))}
    >
      {icon ? (
        <>
          <i className={iconClass(undefined, icon)} /> {title && " "}
        </>
      ) : null}
      {title && (
        <span className={icon && title ? "ml-1" : ""}>{i18n(title)}</span>
      )}
    </span>
  );
}
