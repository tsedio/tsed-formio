import { selectRoot } from "../root";
import { FormsState } from "./forms.reducers";

export const selectForms = (name: string, state: any) => selectRoot<FormsState>(name, state).data;

export const selectFormsParameters = (name: string, state: any) => selectRoot<FormsState>(name, state).parameters;
