import { createAction } from "@tsed/redux-utils";
import { Formio } from "formiojs";
import get from "lodash/get";
import noop from "lodash/noop";
import { getActionUrl } from "../../utils/url";
import { getActionInfo } from "../action-info";
import { selectForm } from "../form";

const name = "action";

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

export const getAction = (
  formId: string,
  actionId: string,
  done = noop
) => async (dispatch: any) => {
  dispatch(clearActionError(name));
  dispatch(requestAction(name));

  const formio = getFormio(formId, actionId);

  try {
    const action = await formio.loadAction();

    dispatch(getActionInfo(formId, action.name));
    dispatch(receiveAction(name, { action }));
    done(null, action);
  } catch (error) {
    dispatch(failAction(name, { error }));
    done(error);
  }
};

export const saveAction = (formId: string, action: any, done = noop) => async (
  dispatch: any
) => {
  dispatch(clearActionError(name));
  dispatch(sendAction(name, { action }));

  const formio = getFormio(formId, get(action, "data._id", ""));

  try {
    const result = await formio.saveAction(action);
    dispatch(receiveAction(name, { action: result }));
    done(null, result);
  } catch (error) {
    dispatch(failAction(name, { error }));
    done(error);
  }
};

export const deleteAction = (formId: string, actionId: string, done = noop) => {
  return async (dispatch: any, getState: any) => {
    dispatch(clearActionError(name));

    const state = getState();
    const path = formId.replace("__", "/");
    const form = selectForm("form", state);
    const resource = selectForm("resource", state);

    formId = (path === form.path ? form._id : resource._id) || formId;

    const formio = getFormio(formId, actionId);

    try {
      await formio.deleteAction();
      dispatch(resetAction(name));
      done(null);
    } catch (error) {
      dispatch(failAction(name, { error }));
      done(error);
    }
  };
};
