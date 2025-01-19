import { SelectHTMLAttributes } from "react";

import { FormControlProps } from "../form-control/FormControl";

export interface SelectOptionBaseProps<Data = any> extends Record<string, any> {
  label: string | JSX.Element;
  value: string;
  id?: string;
  disabled?: boolean;
  note?: string | JSX.Element;
  group?: string;
  data?: Data;
  template?: (item: SelectOptionProps<Data>) => JSX.Element;
}

export interface SelectOptionProps<Data = string> extends SelectOptionBaseProps<Data> {
  options?: SelectOptionProps<Data>[];
}

export interface SelectProps<Data = string> extends FormControlProps<Data, SelectHTMLAttributes<HTMLSelectElement>> {
  layout?: "html5" | "react" | "choicesjs";
  /**
   * Error message
   */
  errorMessage?: string;
  readonly?: boolean;
  disableSearch?: boolean;
  searchEnabled?: boolean;
  customProperties?: Record<string, any>;
}

export interface SelectSingle<Data = string> extends SelectProps<Data> {
  multiple?: false | undefined;
  options: (SelectOptionBaseProps<Data> | Omit<SelectOptionProps<Data>, "value">)[];
}

export interface SelectMultiple<Data = string> extends SelectProps<Data[]> {
  multiple: true;
  options: (SelectOptionBaseProps<Data> | Omit<SelectOptionProps<Data>, "value">)[];
}

export type AllSelectProps<Data = string> = SelectSingle<Data> | SelectMultiple<Data>;
