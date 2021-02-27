import { selectRoot } from "../root";
import { ACTION } from "./action.constant";

export const selectAction = (state: any) => selectRoot(ACTION, state).data;
