import { Formio } from "@formio/js";
import { createAction } from "@tsed/redux-utils";
import get from "lodash/get";
import noop from "lodash/noop";

import { getActionUrl } from "../../utils/url";
import { getActionInfo } from "../action-info";
import { ACTION } from "./action.constant";

export const clearActionError = createAction();
export const resetAction = createAction();
export const requestAction = createAction();
export const receiveAction = createAction();
export const failAction = createAction();
export const sendAction = createAction();

function getFormio(formId: string, id: string) {
  const url = getActionUrl(formId, id);
  return new Formio(url);
}

export const getAction =
  (formId: string, actionId: string, done = noop) =>
  async (dispatch: any) => {
    dispatch(clearActionError(ACTION));
    dispatch(requestAction(ACTION));

    const formio = getFormio(formId, actionId);

    try {
      const action = await formio.loadAction();

      dispatch(getActionInfo(formId, action.name));
      dispatch(receiveAction(ACTION, { action }));
      done(null, action);
    } catch (error) {
      console.log(error);
      dispatch(failAction(ACTION, { error }));
      done(error);
    }
  };

export const saveAction =
  (formId: string, action: any, done = noop) =>
  async (dispatch: any) => {
    dispatch(clearActionError(ACTION));
    dispatch(sendAction(ACTION, { action }));

    const formio = getFormio(formId, get(action, "data._id", ""));

    try {
      const result = await formio.saveAction(action);
      dispatch(receiveAction(ACTION, { action: result }));
      done(null, result);
    } catch (error) {
      dispatch(failAction(ACTION, { error }));
      done(error);
    }
  };

export const deleteAction = (formId: string, actionId: string, done = noop) => {
  return async (dispatch: any) => {
    dispatch(clearActionError(ACTION));

    // const state = getState();
    // const path = formId.replace("__", "/");
    // const form = selectForm("form", state);
    // const resource = selectForm("resource", state);
    //
    // formId = (path === form.path ? form._id : resource._id) || formId;

    const formio = getFormio(formId, actionId);

    try {
      await formio.deleteAction();
      dispatch(resetAction(ACTION));
      done(null);
    } catch (error) {
      dispatch(failAction(ACTION, { error }));
      done(error);
    }
  };
};
