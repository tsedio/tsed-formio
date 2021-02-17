import type { FormSchema } from "./FormSchema";

export interface ComponentSchema {
  type: string;
  key: string;
  label?: string;
  components?: ComponentSchema[];
  form?: FormSchema;

  [key: string]: any;
}
