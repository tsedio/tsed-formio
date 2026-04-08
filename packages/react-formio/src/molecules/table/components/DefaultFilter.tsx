import "../interfaces/extends";

import { Header, RowData } from "@tanstack/react-table";
import type { ComponentType } from "react";

import { getComponent, registerComponent } from "../../../registries/components";

export interface DefaultFilterProps<Data extends RowData = any, TValue = unknown> {
  header: Header<Data, TValue>;
  i18n?: (f: string) => string;
}

export interface FilterProps<Data extends RowData = any, Opts = Record<string, unknown>> extends DefaultFilterProps<Data> {
  options: Opts;
}

export function DefaultFilter<Data extends RowData = any, TValue = unknown>(props: DefaultFilterProps<Data, TValue>) {
  const { header, i18n } = props;
  const {
    filter = {
      variant: "text"
    }
  } = header.column.columnDef.meta || {};

  const { variant: filterVariant } = filter;
  const Filter = getComponent<ComponentType<FilterProps>>([`Filter.${header.column.id}`, `Filter.${filterVariant}`, "Filter.text"]);

  if (!Filter) {
    console.warn("Missing filter for `Filter." + header.column.id + "` or `Filter." + filterVariant + "`");

    return null;
  }

  if (filter.disabled) {
    return null;
  }

  return (
    <div className='table-cell-header__filter'>
      <Filter header={header} options={filter} i18n={i18n} />
    </div>
  );
}

registerComponent("Filter", DefaultFilter);
