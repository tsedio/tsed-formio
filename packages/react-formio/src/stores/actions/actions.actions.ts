import { createAction } from "@tsed/redux-utils";
import { Formio } from "formiojs";
import noop from "lodash/noop";
import { getFormUrl } from "../../utils/url";
import { ACTIONS } from "./actions.constant";

export const resetActions = createAction();
export const requestActions = createAction();
export const receiveActions = createAction<{
  actions: any[];
  availableActions: any[];
}>();
export const failActions = createAction<{ error: Error }>();

export const getActions = (id: string, done = noop) => async (dispatch: any) => {
  dispatch(resetActions(ACTIONS));
  dispatch(requestActions(ACTIONS));

  const url = getFormUrl(id);
  const formio = new Formio(url);

  try {
    const [actions, availableActions] = await Promise.all([formio.loadActions({ params: {} }), formio.availableActions()]);

    dispatch(receiveActions(ACTIONS, { actions, availableActions }));
    done(null, actions, availableActions);
  } catch (error) {
    dispatch(failActions(ACTIONS, { error }));
    done(error);
  }
};
