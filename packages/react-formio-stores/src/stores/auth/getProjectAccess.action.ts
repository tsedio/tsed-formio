import { Formio } from "@formio/js";

import { projectAccessUser } from "./auth.actions";
import { AUTH } from "./auth.constant";

function transformProjectAccess(projectAccess: any[]) {
  return projectAccess.reduce(
    (result: any, access: any) => ({
      ...result,
      [access.type]: access.roles
    }),
    {}
  );
}

export async function getProjectAccess(dispatch: any) {
  const projectUrl = Formio.getProjectUrl();

  try {
    const project = await Formio.makeStaticRequest(projectUrl);
    const projectAccess = transformProjectAccess(project.access);

    dispatch(projectAccessUser(AUTH, projectAccess));
  } catch {}
}
