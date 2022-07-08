import { createReducer, InitialStateCreator } from "@tsed/redux-utils";

import { FormSchema } from "../../interfaces";
import { clearFormError, failForm, receiveForm, requestForm, resetForm, sendForm } from "./form.actions";

export interface FormState {
  error: null | Error;
  data?: Partial<FormSchema>;
  isActive: boolean;
  lastUpdated: number;
  url: string;
}

const createInitialState: InitialStateCreator<FormState> = () => ({
  id: "",
  isActive: false,
  lastUpdated: 0,
  data: {},
  url: "",
  error: null
});

export const formReducer = createReducer<FormState>(
  {
    [resetForm.toString()]: (_, _2, reset) => reset(),
    [clearFormError.toString()]: (state) => ({
      ...state,
      error: null
    }),
    [requestForm.toString()]: (state, { id, url }) => ({
      ...state,
      isActive: true,
      id,
      url,
      data: {},
      error: null
    }),
    [receiveForm.toString()]: (state, { form, url }) => ({
      ...state,
      isActive: false,
      id: form._id,
      data: form,
      url: url || state.url,
      error: null
    }),
    [failForm.toString()]: (state, payload) => ({
      ...state,
      error: payload.error,
      isActive: false
    }),
    [sendForm.toString()]: (state, { form, url }) => ({
      ...state,
      data: form,
      url,
      isActive: true
    })
  },
  createInitialState
);
