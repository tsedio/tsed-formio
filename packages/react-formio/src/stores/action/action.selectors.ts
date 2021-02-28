import { ActionSchema } from "../../interfaces";
import { selectRoot } from "../root";
import { ACTION } from "./action.constant";
import { ActionState } from "./action.reducers";

export const selectAction = (state: Record<string, any>): ActionSchema =>
  selectRoot<ActionState>(ACTION, state).data;
