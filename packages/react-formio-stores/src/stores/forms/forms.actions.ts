import type { FormType } from "@tsed/react-formio";
import { createAction } from "@tsed/redux-utils";
import { Formio } from "formiojs";
import noop from "lodash/noop";

import { mapRequestParams, RequestParamsOptions } from "../../utils/mapRequestParams";
import { selectFormsParameters } from "./forms.selectors";

export const resetForms = createAction();
export const requestForms = createAction<{
  parameters: Partial<RequestParamsOptions>;
}>();
export const receiveForms = createAction<{ forms: FormType[] }>();
export const failForms = createAction();

export type GetFormsCB = (err: any, forms?: FormType[]) => void;

export const getForms =
  (name: string, parameters: Partial<RequestParamsOptions>, done: GetFormsCB = noop) =>
  async (dispatch: any, getState: any) => {
    dispatch(requestForms(name, { parameters }));

    const formio = new Formio(`${Formio.getProjectUrl()}/form`);
    const requestParams = mapRequestParams(selectFormsParameters(name, getState()));

    try {
      const result: FormType[] = await formio.loadForms({
        params: requestParams
      });
      dispatch(receiveForms(name, { forms: result }));
      done(null, result);
    } catch (error) {
      dispatch(failForms(name, { error }));
      done(error);
    }
  };

export const refreshForms = (name: string, done = noop) => {
  return async (dispatch: any, getState: any) => {
    const parameters = selectFormsParameters(name, getState());
    return getForms(name, parameters, done)(dispatch, getState);
  };
};
