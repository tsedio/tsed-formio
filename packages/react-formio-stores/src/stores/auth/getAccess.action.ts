import type { FormType, RoleType } from "@tsed/react-formio";
import { Formio } from "formiojs";

import { formAccessUser, submissionAccessUser, userForms, userRoles } from "./auth.actions";
import { AUTH } from "./auth.constant";

function transformSubmissionAccess(forms: Record<string, FormType>) {
  return Object.values(forms).reduce(
    (result, form) => ({
      ...result,
      [form.name as string]: form.submissionAccess.reduce(
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

function transformFormAccess(forms: Record<string, FormType>) {
  return Object.values(forms).reduce(
    (result, form) => ({
      ...result,
      [form.name as string]: form.access.reduce(
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
      roles: Record<string, RoleType>;
      forms: Record<string, FormType>;
    } = await Formio.makeStaticRequest(`${projectUrl}/access`);

    const submissionAccess = transformSubmissionAccess(result.forms);
    const formAccess = transformFormAccess(result.forms);

    dispatch(submissionAccessUser(AUTH, { submissionAccess }));
    dispatch(formAccessUser(AUTH, { formAccess }));
    dispatch(userRoles(AUTH, { roles: result.roles }));
    dispatch(userForms(AUTH, { forms: result.forms }));
  } catch {}
}
