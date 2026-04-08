import { FormType } from "./FormType";

export type ActionDefaultsType = {
  handler: string[];
  method: string[];
  priority: number;
  name: string;
  title: string;
};

export interface ActionInfoType extends Record<string, unknown> {
  name: string;
  title: string;
  description: string;
  priority: number;
  defaults: ActionDefaultsType;
}

export interface ActionType extends ActionInfoType {
  _id?: string;
  settingsForm: Partial<FormType>;
  access?: {
    handler: boolean;
    method: boolean;
  };
}
