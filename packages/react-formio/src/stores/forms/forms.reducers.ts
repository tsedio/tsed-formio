import { createReducer } from "@tsed/redux-utils";

import { FormSchema } from "../../interfaces";
import { failForms, receiveForms, requestForms, resetForms } from "./forms.actions";

export interface FormsState {
  error: null | Error;
  isActive: boolean;
  parameters: {
    pageSize: number;
    pageIndex: number;
    pageCount: number;
    query: any;
    select: any;
    sortBy: any[];
    filters: any[];
  };
  data: FormSchema[];
}

const createInitialState = ({ pageIndex = 0, pageSize = 10, query = {}, select = "", sortBy = [] }: any = {}): FormsState => {
  return {
    error: null,
    isActive: false,
    parameters: {
      pageSize,
      pageIndex,
      pageCount: 0,
      query,
      select,
      sortBy,
      filters: []
    },
    data: []
  };
};

export const formsReducer = createReducer<FormsState>({}, createInitialState)
  .on(resetForms, (_: any, _2: any, reset: any) => {
    return reset();
  })
  .on(requestForms, (state: FormsState, { parameters }: any) => {
    return {
      ...state,
      parameters: {
        ...state.parameters,
        ...parameters
      },
      error: null,
      data: [],
      isActive: true
    };
  })
  .on(receiveForms, (state: FormsState, { forms }: any) => {
    const total = forms.serverCount;
    const pageCount = Math.ceil(total / (state.parameters.pageSize || 10));

    delete forms.serverCount;

    return {
      ...state,
      data: forms,
      isActive: false,
      parameters: {
        ...state.parameters,
        pageCount,
        totalLength: total
      }
    };
  })
  .on(failForms, (state: any, { error }: any) => {
    return {
      ...state,
      error,
      isActive: false
    };
  });
