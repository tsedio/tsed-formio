import { Formio } from "formiojs";
import { RoleSchema } from "../../interfaces";
import { FormSchema } from "../../interfaces/FormSchema";
import {
  formAccessUser,
  submissionAccessUser,
  userForms,
  userRoles
} from "./auth.actions";
import { USER_AUTH } from "./auth.constant";

function transformSubmissionAccess(forms: Record<string, FormSchema>) {
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

function transformFormAccess(forms: Record<string, FormSchema>) {
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

export async function getAccess(dispatch: any) {
  const projectUrl = Formio.getProjectUrl();

  try {
    const result: {
      roles: Record<string, RoleSchema>;
      forms: Record<string, FormSchema>;
    } = await Formio.makeStaticRequest(`${projectUrl}/access`);

    const submissionAccess = transformSubmissionAccess(result.forms);
    const formAccess = transformFormAccess(result.forms);

    dispatch(submissionAccessUser(USER_AUTH, { submissionAccess }));
    dispatch(formAccessUser(USER_AUTH, { formAccess }));
    dispatch(userRoles(USER_AUTH, { roles: result.roles }));
    dispatch(userForms(USER_AUTH, { forms: result.forms }));
  } catch (err) {}
}
