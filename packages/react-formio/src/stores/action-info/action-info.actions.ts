import { createAction } from "@tsed/redux-utils";
import noop from "lodash/noop";
import { Formio } from "formiojs";
import { getFormUrl } from "../../utils/url";

export const resetActionInfo = createAction();
export const requestActionInfo = createAction();
export const receiveActionInfo = createAction();
export const failActionInfo = createAction();

const name = "actionInfo";

export const getActionInfo = (
  formId: string,
  actionType: string,
  done = noop
) => async (dispatch: any) => {
  dispatch(requestActionInfo(name));

  const url = getFormUrl(formId);
  const formio = new Formio(url);

  try {
    const actionInfo = await formio.actionInfo(actionType);

    actionInfo.settingsForm.action =
      Formio.getProjectUrl() + actionInfo.settingsForm.action;

    dispatch(receiveActionInfo(name, { actionInfo }));
    done(null, actionInfo);
  } catch (error) {
    dispatch(failActionInfo(name, { error }));
    done(error);
  }
};
