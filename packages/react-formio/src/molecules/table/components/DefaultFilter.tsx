import "../interfaces/extends";

import { Header } from "@tanstack/react-table";
import type { ComponentType } from "react";

import { getComponent, registerComponent } from "../../../registries/components";

export interface DefaultFilterProps<Data = any> {
  header: Header<Data, unknown>;
  i18n?: (f: string) => string;
}

export interface FilterProps<Data = any, Opts = Record<string, unknown>> {
  header: Header<Data, unknown>;
  options: Opts;
  i18n?: (f: string) => string;
}

export function DefaultFilter<Data = any>({ header, i18n }: DefaultFilterProps<Data>) {
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

  return (
    <div className='table-cell-header__filter'>
      <Filter header={header} options={filter} i18n={i18n} />
    </div>
  );
}

registerComponent("Filter", DefaultFilter);
