import React from "react";
import { OperationButtonProps } from "../components/table/components/defaultOperationButton.component";

export interface Operation {
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
  permissionsResolver?: PermissionsResolver;
}

export type PermissionsResolver = (data: any, ctx: any) => void;
export type OnClickOperation = (data: any, operation: Operation) => void;
