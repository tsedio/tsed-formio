import type { InputHTMLAttributes } from "react";

import type { FormControlProps } from "../form-control/FormControl";

export interface InputTagsProps<Data = string> extends FormControlProps<Data[], InputHTMLAttributes<HTMLInputElement>> {
  layout?: "html5" | "react" | "choicesjs";
  delimiter?: string;
  customProperties?: Record<string, any>;
}
