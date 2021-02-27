import { createReducer, InitialStateCreator } from "@tsed/redux-utils";

import {
  clearActionError,
  failAction,
  receiveAction,
  requestAction,
  resetAction,
  sendAction
} from "./action.actions";
import { ACTION } from "./action.constant";

const createInitialState: InitialStateCreator = () => ({
  error: null,
  data: {},
  isActive: false
});

export const actionReducer = createReducer({}, createInitialState)
  .on(resetAction, (_: any, _2: any, reset: any) => reset())
  .on(clearActionError, (state: any) => ({
    ...state,
    error: null
  }))
  .on(requestAction, (state: any) => ({
    ...state,
    error: null,
    data: {},
    isActive: true
  }))
  .on(sendAction, (state: any, { action }: any) => ({
    ...state,
    error: null,
    data: action,
    isActive: true
  }))
  .on(receiveAction, (state: any, { action }: any) => ({
    ...state,
    error: null,
    data: action,
    isActive: false
  }))
  .on(receiveAction, (state: any, { action }: any) => ({
    ...state,
    error: null,
    data: action,
    isActive: false
  }))
  .on(failAction, (state: any, { error }: any) => ({
    ...state,
    data: {},
    error,
    isActive: false
  }))(ACTION);
