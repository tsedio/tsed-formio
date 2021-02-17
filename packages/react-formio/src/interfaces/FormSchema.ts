import type { ComponentSchema } from "./ComponentSchema";

export type FormSchema = {
  _id?: string;
  title?: string;
  name?: string;
  machineName?: string;
  components: ComponentSchema[];
  [key: string]: any;
};
