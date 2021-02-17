import { FormSchema } from "../../interfaces";
import { selectRoot } from "../root";
import { FormState } from "./form.reducers";

export const selectForm = (name: string, state: any): Partial<FormSchema> =>
  selectRoot<FormState>(name, state).data;
