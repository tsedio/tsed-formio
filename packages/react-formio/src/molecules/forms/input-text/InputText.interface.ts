import type { FormControlProps } from "../form-control/FormControl";

export interface InputTextProps<Data = any> extends FormControlProps<Data> {
  debounceDelay?: number;
}
