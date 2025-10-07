import { flexRender, type Header } from "@tanstack/react-table";
import cx from "classnames";

import { getComponent, registerComponent } from "../../../registries/components";
import type { DefaultArrowSort } from "./DefaultArrowSort";
import type { DefaultFilter } from "./DefaultFilter";

export interface DefaultCellHeaderProps<Data = any> {
  header: Header<Data, unknown>;
  i18n?: (f: string) => string;
}

export function DefaultCellHeader<Data = any>(props: DefaultCellHeaderProps<Data>) {
  const { header, i18n } = props;

  const ArrowSort = getComponent<typeof DefaultArrowSort>("ArrowSort");
  const Filter = getComponent<typeof DefaultFilter>("Filter");
  const canSort = header.column.getCanSort();
  const canFilter = header.column.getCanFilter();

  return (
    <div className={cx("table-cell-header", {})}>
      <div
        className={cx("table-cell-header__label", {
          "cursor-pointer select-none": header.column.getCanSort()
        })}
        {...(canSort
          ? {
              onClick: header.column.getToggleSortingHandler()
            }
          : {})}
      >
        <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>

        <ArrowSort header={header} />
      </div>
      {canFilter && <Filter header={header} i18n={i18n} />}
    </div>
  );
}

registerComponent("CellHeader", DefaultCellHeader);
