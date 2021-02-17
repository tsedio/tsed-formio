import { createAction } from "@tsed/redux-utils";
import { Formio } from "formiojs";
import noop from "lodash/noop";
import { getFormUrl } from "../../utils/url";

export const resetActions = createAction();
export const requestActions = createAction();
export const receiveActions = createAction<{
  actions: any[];
  availableActions: any[];
}>();
export const failActions = createAction<{ error: Error }>();

const name = "actions";

export const getActions = (id: string, done = noop) => async (
  dispatch: any
) => {
  dispatch(resetActions(name));
  dispatch(requestActions(name));

  const url = getFormUrl(id);
  const formio = new Formio(url);

  try {
    const [actions, availableActions] = await Promise.all([
      formio.loadActions({ params: {} }),
      formio.availableActions()
    ]);

    dispatch(receiveActions(name, { actions, availableActions }));
    done(null, actions, availableActions);
  } catch (error) {
    dispatch(failActions(name, { error }));
    done(error);
  }
};
