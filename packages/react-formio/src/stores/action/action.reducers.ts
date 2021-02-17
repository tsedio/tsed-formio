import { createReducer, InitialStateCreator } from "@tsed/redux-utils";
import {
  clearActionError,
  failAction,
  receiveAction,
  requestAction,
  resetAction,
  sendAction
} from "./action.actions";

const createInitialState: InitialStateCreator = () => ({
  error: null,
  data: {},
  isActive: false
});

export const actionReducer = createReducer(
  {
    [resetAction.toString()]: (_: any, _2: any, reset: any) => reset(),
    [clearActionError.toString()]: (state: any) => ({
      ...state,
      error: null
    }),
    [requestAction.toString()]: (state: any) => ({
      ...state,
      error: null,
      data: {},
      isActive: true
    }),
    [sendAction.toString()]: (state: any, { action }: any) => ({
      ...state,
      error: null,
      data: action,
      isActive: true
    }),
    [receiveAction.toString()]: (state: any, { action }: any) => ({
      ...state,
      error: null,
      data: action,
      isActive: false
    }),
    [failAction.toString()]: (state: any, { error }: any) => ({
      ...state,
      data: {},
      error,
      isActive: false
    })
  },
  createInitialState
);
