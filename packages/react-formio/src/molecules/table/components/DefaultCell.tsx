import type { CellContext } from "@tanstack/react-table";

import { registerComponent } from "../../../registries/components";

export function DefaultCell<Data = any>({ getValue, renderValue }: CellContext<Data, any>): JSX.Element {
  const value = getValue();
  if (value === undefined) {
    return <span></span>;
  }

  const rendered = renderValue();

  if (rendered != null && value !== rendered) {
    return <div dangerouslySetInnerHTML={{ __html: String(rendered) }} />;
  }

  return <span>{String(value)}</span>;
}

registerComponent("Cell", DefaultCell);
registerComponent("Cell.text", DefaultCell);
