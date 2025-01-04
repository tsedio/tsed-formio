import type { ComponentType } from "./ComponentType";

export type FormType = {
  _id?: string;
  title?: string;
  name?: string;
  machineName?: string;
  components: ComponentType[];
  tags?: string[];
  action?: string;
  properties?: Record<string, any>;
  [key: string]: any;
};
