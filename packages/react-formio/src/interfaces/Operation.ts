import React from "react";

import { OperationButtonProps } from "../components/table/components/defaultOperationButton.component";

export type PermissionsResolver<Data = any> = (data: Data, ctx: any) => void;
export type OnClickOperation<Data = any> = (data: Data, operation: Operation) => void;

export interface Operation<Data = any> {
  /**
   * Action identifier
   */
  action: string;
  title?: string;
  /**
   * Alias Operation
   */
  alias?: string;
  path?: string;
  className?: string;
  buttonType?: string;
  buttonSize?: string;
  buttonOutline?: boolean;
  icon?: string;
  /**
   * Custom ActionButton
   */
  OperationButton?: React.ComponentType<OperationButtonProps>;
  /**
   * Permission resolver to display ActionButton
   */
  permissionsResolver?: PermissionsResolver<Data>;
}
