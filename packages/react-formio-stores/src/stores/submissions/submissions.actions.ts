import { Formio } from "@formio/js";
import { createAction } from "@tsed/redux-utils";
import noop from "lodash/noop";

import { mapRequestParams } from "../../utils/mapRequestParams";
import { getSubmissionUrl } from "../../utils/url";
import { selectSubmissionsParameters } from "./submissions.selectors";

export const resetSubmissions = createAction();
export const requestSubmissions = createAction();
export const receiveSubmissions = createAction();
export const failSubmissions = createAction();

export const getSubmissions =
  (name: string, formId: string, parameters: any = {}, done = noop) =>
  async (dispatch: any, getState: any) => {
    dispatch(requestSubmissions(name, { formId, parameters }));

    const url = getSubmissionUrl(formId);
    const formio = new Formio(url);
    const requestParams = mapRequestParams(selectSubmissionsParameters(name, getState()));

    try {
      const submissions = await formio.loadSubmissions({ params: requestParams });
      dispatch(receiveSubmissions(name, { submissions }));
      done(null, submissions);
    } catch (error) {
      dispatch(failSubmissions(name, { error }));
      done(error);
    }
  };

export const refreshSubmissions = (name: string, formId: string, done = noop) => {
  return async (dispatch: any, getState: any) => {
    const parameters = selectSubmissionsParameters(name, getState());
    return getSubmissions(name, formId, parameters, done)(dispatch, getState);
  };
};
