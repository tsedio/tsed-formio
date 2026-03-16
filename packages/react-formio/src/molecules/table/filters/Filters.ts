import type { RowData } from "@tanstack/react-table";

import type { SelectOptionProps, SelectProps } from "../../forms/select/Select.interface";
import type { FilterProps } from "../components/DefaultFilter";

export type FilterVariants = "text" | "range" | "select" | "boolean";

export interface FilterBaseOptions extends Record<string, unknown> {
  variant: string;
}

export interface FilterTextOptions extends FilterBaseOptions {
  variant: "text";
  disabled?: boolean;
  disableDatalist?: boolean;
}

export interface FilterRangeOptions extends FilterBaseOptions {
  variant: "range";
  min?: number;
  max?: number;
  step?: number;
}

export interface FilterSelectOptions<Data extends RowData = any> extends FilterBaseOptions, Omit<SelectProps<string>, "options"> {
  variant: "select";
  options?: SelectOptionProps<string>[] | ((props: FilterProps<Data, FilterSelectOptions>) => SelectOptionProps<string>)[];
}

export interface FilterBooleanOptions extends FilterBaseOptions {
  variant: "boolean";
  options?: SelectOptionProps<string>[];
}

export type FilterOptions = FilterTextOptions | FilterRangeOptions | FilterSelectOptions | FilterBooleanOptions;
