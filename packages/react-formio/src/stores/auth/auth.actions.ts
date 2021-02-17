import { createAction } from "@tsed/redux-utils";
import { Formio } from "formiojs";
import noop from "lodash/noop";

const name = "auth";

export const requestUser = createAction();
export const receiveUser = createAction<{ user: any }>();
export const failUser = createAction<{ error: Error }>();
export const logoutUser = createAction();
export const submissionAccessUser = createAction<{ submissionAccess: any }>();
export const formAccessUser = createAction<{ formAccess: any }>();
export const projectAccessUser = createAction<{ projectAccess: any }>();
export const userRoles = createAction<{ roles: any[] }>();
export const userForms = createAction<{ forms: any[] }>();

function transformSubmissionAccess(forms: any[]) {
  return Object.values(forms).reduce(
    (result, form) => ({
      ...result,
      [form.name]: form.submissionAccess.reduce(
        (formSubmissionAccess: any, access: any) => ({
          ...formSubmissionAccess,
          [access.type]: access.roles
        }),
        {}
      )
    }),
    {}
  );
}

function transformFormAccess(forms: any[]) {
  return Object.values(forms).reduce(
    (result, form) => ({
      ...result,
      [form.name]: form.access.reduce(
        (formAccess: any, access: any) => ({
          ...formAccess,
          [access.type]: access.roles
        }),
        {}
      )
    }),
    {}
  );
}

function transformProjectAccess(projectAccess: any) {
  return projectAccess.reduce(
    (result: any, access: any) => ({
      ...result,
      [access.type]: access.roles
    }),
    {}
  );
}

async function getAccess(dispatch: any) {
  const projectUrl = Formio.getProjectUrl();

  try {
    const result = await Formio.makeStaticRequest(`${projectUrl}/access`);

    const submissionAccess = transformSubmissionAccess(result.forms);
    const formAccess = transformFormAccess(result.forms);

    dispatch(submissionAccessUser(name, { submissionAccess }));
    dispatch(formAccessUser(name, { formAccess }));
    dispatch(userRoles(name, { roles: result.roles }));
    dispatch(userForms(name, { forms: result.forms }));
  } catch (err) {}
}

async function getProjectAccess(dispatch: any) {
  const projectUrl = Formio.getProjectUrl();

  try {
    const project = await Formio.makeStaticRequest(projectUrl);
    const projectAccess = transformProjectAccess(project.access);

    dispatch(projectAccessUser(name, projectAccess));
  } catch (er) {}
}

export const initAuth = (done = noop) => async (dispatch: any) => {
  dispatch(requestUser(name));

  try {
    const [user] = await Promise.all([
      Formio.currentUser(),
      getAccess(dispatch),
      getProjectAccess(dispatch)
    ]);

    if (user) {
      dispatch(receiveUser(name, user));
    } else {
      dispatch(logoutUser(name));
    }
  } catch (error) {
    dispatch(failUser(name, { error }));
  }

  done();
};

export const setUser = (user: any) => (dispatch: any) => {
  Formio.setUser(user);
  dispatch(receiveUser(name, { user }));
};

export const logout = () => (dispatch: any) => {
  Formio.logout();
  dispatch(logoutUser(name));
};
