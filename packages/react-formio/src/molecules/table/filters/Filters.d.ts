import type { FilterProps } from "../../../../molecules/table/components/DefaultFilter";
import { SelectOptionProps, SelectProps } from "../../forms/select/Select.interface";

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

export interface FilterSelectOptions extends FilterBaseOptions, SelectProps<string> {
  variant: "select";
  options?: SelectOptionProps<string>[] | ((props: FilterProps<any, FilterSelectOptions>) => SelectOptionProps<string>[]);
}

export interface FilterBooleanOptions extends FilterBaseOptions {
  variant: "boolean";
  options?: SelectOptionProps<string>[];
}

export type FilterOptions = FilterTextOptions | FilterRangeOptions | FilterSelectOptions | FilterBooleanOptions;
