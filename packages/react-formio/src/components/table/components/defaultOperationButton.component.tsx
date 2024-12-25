import classnames from "classnames";
import { HTMLAttributes } from "react";

import { iconClass } from "../../../utils/iconClass";
import { stopPropagationWrapper } from "../../../utils/stopPropagationWrapper";

export interface OperationButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
  buttonType?: string;
  buttonSize?: string;
  buttonOutline?: boolean;
  data: any[];
  onClick: (action: string) => void;
  action: string;
  icon?: string;
  title?: string;
  i18n?: (i18n: string) => string;
  ctx?: any;
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
    i18n = (f: string) => f,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ctx,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      aria-label={"Operation button: " + (title || action)}
      className={classnames(className, ["btn", buttonOutline && "outline", buttonType].filter(Boolean).join("-"), `btn-${buttonSize}`)}
      onClick={stopPropagationWrapper(() => onClick(action))}
    >
      {icon ? (
        <>
          <i className={iconClass(undefined, icon)} /> {title && " "}
        </>
      ) : null}
      {title && <span className={icon && title ? "ml-1" : ""}>{i18n(title)}</span>}
    </button>
  );
}
