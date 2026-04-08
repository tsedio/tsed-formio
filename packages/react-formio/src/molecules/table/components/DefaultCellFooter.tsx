import { flexRender, type Header } from "@tanstack/react-table";

import { registerComponent } from "../../../registries/components";

export interface DefaultCellHeaderProps<Data = any> {
  header: Header<Data, unknown>;
  i18n?: (f: string) => string;
}

export function DefaultCellFooter<Data = any>(props: DefaultCellHeaderProps<Data>) {
  const { header } = props;

  return <>{flexRender(header.column.columnDef.footer, header.getContext())}</>;
}

registerComponent("CellFooter", DefaultCellFooter);
