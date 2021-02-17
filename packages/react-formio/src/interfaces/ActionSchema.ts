import { FormSchema } from "./FormSchema";

export interface ActionDefaultsSchema {
  handler: string[];
  method: string[];
  priority: number;
  name: string;
  title: string;
}
export interface ActionSchema {
  name: string;
  title: string;
  description: string;
  priority: number;
  defaults: ActionDefaultsSchema;
  settingsForm: Partial<FormSchema>;
  access?: {
    handler: boolean;
    method: boolean;
  };
}
