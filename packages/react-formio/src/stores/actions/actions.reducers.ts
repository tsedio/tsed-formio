import { createReducer, InitialStateCreator } from "@tsed/redux-utils";

import { ActionInfoSchema, ActionSchema } from "../../interfaces";
import { failActions, receiveActions, requestActions, resetActions } from "./actions.actions";
import { ACTIONS } from "./actions.constant";

export interface ActionsState {
  error: null | Error;
  data: ActionSchema[];
  availableActions: ActionInfoSchema[];
  isActive: boolean;
}

const createInitialState: InitialStateCreator<ActionsState> = () => ({
  error: null,
  data: [],
  availableActions: [],
  isActive: false
});

export const actionsReducer = createReducer<ActionsState>(
  {
    [resetActions.toString()]: (_, _2, reset) => {
      return reset();
    },
    [requestActions.toString()]: (state) => ({
      ...state,
      error: null,
      data: [],
      availableActions: [],
      isActive: true
    }),
    [receiveActions.toString()]: (state, { actions, availableActions }) => ({
      ...state,
      error: null,
      data: actions,
      availableActions,
      isActive: false
    }),
    [failActions.toString()]: (state, { error }) => ({
      ...state,
      error,
      data: [],
      isActive: false
    })
  },
  createInitialState
)(ACTIONS);
