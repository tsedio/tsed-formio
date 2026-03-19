import { CellContext } from "@tanstack/react-table";
import cx from "clsx";
import { HTMLAttributes } from "react";

import { type CellMetadata, Operation } from "../../../interfaces";
import type { JSONRecord } from "../../../interfaces/JSONRecord.js";
import { registerComponent } from "../../../registries/components";
import { iconClass } from "../../../utils/iconClass";
import { stopPropagationWrapper } from "../../../utils/stopPropagationWrapper";

export interface OperationButtonProps<Data extends object = JSONRecord> extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
  operation: Operation<Data>;
  info: CellContext<Data, unknown>;
  metadata?: CellMetadata;
  onClick: () => void;
  i18n?: (i18n: string) => string;
}

export function DefaultOperationButton<Data extends object = JSONRecord>(props: OperationButtonProps<Data>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { i18n = (f: string) => f, onClick, operation, info, ...extraProps } = props;
  const { className = "btn", buttonSize = "xs", buttonType = "primary", buttonOutline, action, title = "", icon = "" } = operation;

  return (
    <button
      {...extraProps}
      aria-label={"Operation button: " + (title || action)}
      className={cx(className, ["btn", buttonOutline && "outline", buttonType].filter(Boolean).join("-"), `btn-${buttonSize}`)}
      onClick={stopPropagationWrapper(() => onClick())}
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

registerComponent("OperationButton", DefaultOperationButton);
