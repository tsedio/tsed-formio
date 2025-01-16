import { HTMLAttributes } from "react";

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

export interface SelectProps<Data = string> extends FormControlProps, Omit<HTMLAttributes<HTMLSelectElement>, "onChange" | "prefix"> {
  layout?: "html5" | "react" | "choicesjs";
  /**
   * Error message
   */
  errorMessage?: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: string;
  options: (SelectOptionBaseProps<Data> | Omit<SelectOptionProps<Data>, "value">)[];
  disableSearch?: boolean;
  searchEnabled?: boolean;
  customProperties?: Record<string, any>;
}

export interface SelectSingle<Data = string> extends SelectProps<Data> {
  multiple?: false | undefined;
  value?: Data;
  onChange?: (name: string, value: Data) => void;
}

export interface SelectMultiple<Data = string> extends SelectProps<Data> {
  multiple: true;
  value?: Data[];
  onChange?: (name: string, value: Data[]) => void;
}

export type AllSelectProps<Data = string> = SelectSingle<Data> | SelectMultiple<Data>;
