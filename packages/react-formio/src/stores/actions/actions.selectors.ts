import { selectRoot } from "../root";
import { ActionsState } from "./actions.reducers";

export const selectActions = (state: Record<string, any>) =>
  selectRoot<ActionsState>("actions", state).data;

export const selectAvailableActions = (state: Record<string, any>) =>
  selectRoot<ActionsState>("actions", state).availableActions;
