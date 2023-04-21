import type { ActionSchema } from "@tsed/react-formio";
import { createReducer, InitialStateCreator } from "@tsed/redux-utils";

import { clearActionError, failAction, receiveAction, requestAction, resetAction, sendAction } from "./action.actions";
import { ACTION } from "./action.constant";

export interface ActionState {
  error: null | Error;
  data: ActionSchema;
  isActive: boolean;
}

const createInitialState: InitialStateCreator = (): ActionState => ({
  error: null,
  data: {} as any,
  isActive: false
});

export const actionReducer = createReducer<ActionState>({}, createInitialState)
  .on(resetAction, (_: any, _2: any, reset: any) => reset())
  .on(clearActionError, (state) => ({
    ...state,
    error: null
  }))
  .on(requestAction, (state) => ({
    ...state,
    error: null,
    data: {},
    isActive: true
  }))
  .on(sendAction, (state, { action }) => ({
    ...state,
    error: null,
    data: action,
    isActive: true
  }))
  .on(receiveAction, (state, { action }) => ({
    ...state,
    error: null,
    data: action,
    isActive: false
  }))
  .on(receiveAction, (state, { action }) => ({
    ...state,
    error: null,
    data: action,
    isActive: false
  }))
  .on(failAction, (state, { error }) => ({
    ...state,
    data: {},
    error,
    isActive: false
  }))(ACTION);
