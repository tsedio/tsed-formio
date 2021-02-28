import { ActionSchema } from "../../interfaces";
import { selectRoot } from "../root";
import { ACTION_INFO } from "./action-info.constant";
import { ActionInfoState } from "./action-info.reducers";

export const selectActionInfo = (
  state: Record<string, any>
): Partial<ActionSchema> =>
  selectRoot<ActionInfoState>(ACTION_INFO, state).data;
