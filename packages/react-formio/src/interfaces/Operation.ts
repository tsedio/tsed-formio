import React from "react";

import type { OperationButtonProps } from "../molecules/table/components/DefaultOperationButton.js";
import type { JSON } from "./SubmissionType.js";

export type CellMetadata = Record<string, unknown>;

export type PermissionsResolver<Data extends { [key: string]: JSON } = { [key: string]: JSON }> = (
  data: Data,
  metadata: CellMetadata,
  operation: Operation<Data>
) => void;

export interface Operation<Data extends { [key: string]: JSON } = { [key: string]: JSON }> {
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
