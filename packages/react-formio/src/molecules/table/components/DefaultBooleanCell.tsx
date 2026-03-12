import { CellContext } from "@tanstack/react-table";

import { registerComponent } from "../../../registries/components";

export function DefaultCellBoolean<Data extends object>({ getValue, column: { columnDef } }: CellContext<Data, boolean>) {
  const value = getValue();
  return <span>{String(value ? columnDef.meta?.labels?.["yes"] || "Yes" : columnDef.meta?.labels?.["no"] || "No")}</span>;
}

registerComponent("Cell.boolean", DefaultCellBoolean);
registerComponent("Cell.checkbox", DefaultCellBoolean);
