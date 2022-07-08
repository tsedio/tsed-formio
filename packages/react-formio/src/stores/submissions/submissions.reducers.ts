import { createReducer } from "@tsed/redux-utils";

import { Submission } from "../../interfaces/Submission";
import { failSubmissions, receiveSubmissions, requestSubmissions, resetSubmissions } from "./submissions.actions";

export interface SubmissionsState {
  error: null | Error;
  formId: string;
  isActive: boolean;
  parameters: {
    pageSize: number;
    pageIndex: number;
    pageCount: number;
    query: any;
    select: any;
    sortBy: any[];
  };
  data: Submission[];
}

export function createInitialState({ pageIndex = 0, pageSize = 10, query = {}, select = "", sortBy = [] }: any = {}): SubmissionsState {
  return {
    error: null,
    formId: "",
    isActive: false,
    parameters: {
      pageSize,
      pageIndex,
      pageCount: 0,
      query,
      select,
      sortBy
    },
    data: []
  };
}

export const submissionsReducer = createReducer<SubmissionsState>({}, createInitialState)
  .on(resetSubmissions, (_: any, _2: any, reset: any) => {
    return reset();
  })
  .on(requestSubmissions, (state: any, { parameters, formId }: any) => {
    return {
      ...state,
      formId,
      parameters: {
        ...state.parameters,
        ...parameters
      },
      error: null,
      data: [],
      isActive: true
    };
  })
  .on(receiveSubmissions, (state: SubmissionsState, { submissions }: any) => {
    const total = submissions.serverCount;
    const pageCount = Math.ceil(total / (state.parameters.pageSize || 10));

    delete submissions.serverCount;

    return {
      ...state,
      data: submissions,
      isActive: false,
      parameters: {
        ...state.parameters,
        pageCount,
        totalLength: total
      }
    };
  })
  .on(failSubmissions, (state: any, { error }: any) => {
    return {
      ...state,
      error,
      isActive: false
    };
  });
