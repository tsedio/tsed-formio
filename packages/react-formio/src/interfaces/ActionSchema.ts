import { FormSchema } from "./FormSchema";

export interface ActionDefaultsSchema {
  handler: string[];
  method: string[];
  priority: number;
  name: string;
  title: string;
}

export interface ActionInfoSchema extends Record<string, unknown> {
  name: string;
  title: string;
  description: string;
  priority: number;
  defaults: ActionDefaultsSchema;
}

export interface ActionSchema extends ActionInfoSchema {
  _id?: string;
  settingsForm: Partial<FormSchema>;
  access?: {
    handler: boolean;
    method: boolean;
  };
}
