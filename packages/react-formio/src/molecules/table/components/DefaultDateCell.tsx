import { CellContext } from "@tanstack/react-table";
import moment from "moment";

import { registerComponent } from "../../../registries/components";

export function DefaultDateCell<Data extends object>({ getValue, column: { columnDef } }: CellContext<Data, string>) {
  const value = getValue();

  if (!value) {
    return <span />;
  }

  const date = moment.parseZone(value, moment.ISO_8601, true);

  if (!date.isValid()) {
    return <span>{String(value)}</span>;
  }

  return <span>{date.format(columnDef.meta?.format || "L")}</span>;
}

registerComponent("Cell.date", DefaultDateCell);
registerComponent("Cell.datetime", DefaultDateCell);
