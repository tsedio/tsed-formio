import { selectRoot } from "../root";
import { ACTIONS } from "./actions.constant";
import { ActionsState } from "./actions.reducers";

export const selectActions = (state: Record<string, any>) =>
  selectRoot<ActionsState>(ACTIONS, state).data;

export const selectAvailableActions = (state: Record<string, any>) =>
  selectRoot<ActionsState>(ACTIONS, state).availableActions;
