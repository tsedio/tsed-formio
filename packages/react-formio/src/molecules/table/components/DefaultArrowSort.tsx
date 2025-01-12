import type { Header } from "@tanstack/react-table";

import { registerComponent } from "../../../registries/components";
import { iconClass } from "../../../utils/iconClass";

export interface DefaultArrowSortProps<Data = any> {
  header: Header<Data, unknown>;
}

export function DefaultArrowSort<Data>({ header }: DefaultArrowSortProps<Data>) {
  const sort = header.column.getIsSorted();

  return (
    <span
      data-testid={`head-sort-${header.column.id}`}
      role='button'
      aria-label={`Sort by ${header.column.columnDef.header}`}
      aria-pressed={sort ? sort === "desc" : undefined}
      className='table-arrow-sort'
    >
      {sort ? <i className={iconClass(undefined, sort === "asc" ? "sort-up" : "sort-down")} /> : null}
    </span>
  );
}

registerComponent("ArrowSort", DefaultArrowSort);
