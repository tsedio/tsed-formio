import type { ActionType } from "@tsed/react-formio";
import { createReducer, InitialStateCreator } from "@tsed/redux-utils";

import { failActionInfo, receiveActionInfo, requestActionInfo, resetActionInfo } from "./action-info.actions";
import { ACTION_INFO } from "./action-info.constant";

export interface ActionInfoState {
  error: null | Error;
  data?: Partial<ActionType>;
  isActive: boolean;
}

const createInitialState: InitialStateCreator<ActionInfoState> = () => ({
  error: null,
  data: {},
  isActive: false
});

export const actionInfoReducer = createReducer<ActionInfoState>(
  {
    [resetActionInfo.toString()]: (_, _2, reset) => {
      return reset();
    },
    [requestActionInfo.toString()]: (state) => ({
      ...state,
      error: null,
      data: {},
      isActive: true
    }),
    [receiveActionInfo.toString()]: (state, { actionInfo }) => ({
      ...state,
      error: null,
      data: actionInfo,
      isActive: false
    }),
    [failActionInfo.toString()]: (state, { error }) => ({
      ...state,
      data: {},
      error,
      isActive: false
    })
  },
  createInitialState
)(ACTION_INFO);
