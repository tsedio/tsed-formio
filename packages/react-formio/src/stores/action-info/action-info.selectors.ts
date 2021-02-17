import { ActionSchema } from "../../interfaces";
import { selectRoot } from "../root";
import { ActionInfoState } from "./action-info.reducers";

export const selectActionInfo = (state: any): Partial<ActionSchema> =>
  selectRoot<ActionInfoState>("actionInfo", state).data;
