import { createAction } from "@tsed/redux-utils";
import { Formio } from "formiojs";
import noop from "lodash/noop";
import { FormSchema } from "../../interfaces";
import { getFormUrl } from "../../utils/url";
import { getActions } from "../actions";
import { selectForm } from "./form.selectors";

export const clearFormError = createAction();
export const requestForm = createAction();
export const receiveForm = createAction();
export const failForm = createAction();
export const resetForm = createAction();
export const sendForm = createAction();

function shouldGet(form: Partial<FormSchema>, id: string) {
  return (
    form &&
    form.components &&
    Array.isArray(form.components) &&
    form.components.length &&
    form._id === id
  );
}

export const getForm =
  (name: string, id = "", done = noop) =>
  async (dispatch: any, getState: any) => {
    dispatch(clearFormError(name));
    // Check to see if the form is already loaded.
    const form = selectForm(name, getState());

    if (shouldGet(form, id)) {
      return;
    }

    const url = getFormUrl(id);
    const formio = new Formio(url);

    dispatch(requestForm(name, { id, url }));

    try {
      const form = await formio.loadForm();

      dispatch(receiveForm(name, { form, url }));
      dispatch(getActions(form._id));
      done(null, form);
    } catch (error) {
      dispatch(failForm(name, { error }));
      done({ error });
    }
  };

export const saveForm =
  (name: string, form: Partial<FormSchema>, done = noop) =>
  async (dispatch: any) => {
    dispatch(clearFormError(name));
    dispatch(sendForm(name, { form }));

    const id = form._id || "";
    const url = getFormUrl(id);
    const formio = new Formio(url);

    try {
      const result = await formio.saveForm(form);
      dispatch(
        receiveForm(name, { form: result, url: getFormUrl(result._id) })
      );
      done(null, result);
    } catch (error) {
      dispatch(failForm(name, { error }));
      done(error);
    }
  };

export const deleteForm =
  (name: string, id: string, done = noop) =>
  async (dispatch: any) => {
    dispatch(clearFormError(name));
    const url = getFormUrl(id);
    const formio = new Formio(url);

    try {
      await formio.deleteForm();
      dispatch(resetForm(name));
      done();
    } catch (error) {
      dispatch(failForm(name, { error }));
      done({ error });
    }
  };
