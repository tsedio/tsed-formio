import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import noop from "lodash/noop";

import { ComponentType, FormType, SubmissionType } from "../../interfaces";
import { RoleType } from "../../interfaces/RoleType";
import { getAccessPermissionForm, getSubmissionPermissionForm } from "./formAccess.schema";

export interface Choice {
  label: string;
  value: string;
}

export interface Access {
  roles: string[];
  type: string;
}

export type AccessRolesType = Record<string, string[]>;

export type FormAccessType = {
  access: FormType;
  submissionAccess: FormType;
};

export type SubmissionAccessType = {
  access: SubmissionType<AccessRolesType>;
  submissionAccess: SubmissionType<AccessRolesType>;
};

function rolesToChoices(roles: RoleType[]): Choice[] {
  return Object.values(roles).map((role) => {
    return {
      label: role.title || "",
      value: role._id || ""
    };
  });
}

function accessToHash(keys: (string | undefined)[] | undefined, access: Access[] = []): AccessRolesType {
  const hash = Object.values(access).reduce((o: any, role: any) => {
    o[role.type] = role.roles;
    return o;
  }, {});

  return ((keys || []).filter(Boolean) as any[]).reduce((data, key: string) => {
    return {
      ...data,
      [key]: hash[key] || []
    };
  }, {});
}

function hashToAccess(data: AccessRolesType) {
  const accessRoles: any[] = [];

  Object.entries(data).forEach(([accessType, roles]) => {
    if (accessType === "submit") {
      return;
    }
    accessRoles.push({
      type: accessType,
      roles
    });
  });

  return accessRoles;
}

export function getFormAccess(roles: RoleType[]): FormAccessType {
  const choices = rolesToChoices(roles);
  const access = getAccessPermissionForm({ choices });
  const submissionAccess = getSubmissionPermissionForm({ choices });

  return {
    access,
    submissionAccess
  };
}

export function dataAccessToSubmissions(form: Partial<FormType>, formAccess: FormAccessType): SubmissionAccessType {
  const getKeys = (components: ComponentType[]) => components.map(({ key }) => key);

  return {
    access: {
      data: accessToHash(getKeys(formAccess.access.components), form.access)
    },
    submissionAccess: {
      data: accessToHash(getKeys(formAccess.submissionAccess.components), form.submissionAccess)
    }
  };
}

export function submissionsToDataAccess(form: Partial<FormType>, submissions: SubmissionAccessType): Partial<FormType> {
  return {
    ...cloneDeep(form),
    access: hashToAccess(submissions.access.data),
    submissionAccess: hashToAccess(submissions.submissionAccess.data)
  };
}

export function shouldUpdate(type: string, submission: SubmissionType<AccessRolesType>, submissions: SubmissionAccessType) {
  return !isEqual(submission.data, (submissions as any)[type].data);
}

export function updateSubmissions(
  type: string,
  submission: SubmissionType<AccessRolesType>,
  submissions: SubmissionAccessType,
  cb: Function = noop
) {
  if (shouldUpdate(type, submission, submissions)) {
    submissions = {
      ...submissions,
      [type]: { data: submission.data }
    };
    cb(submissions);
  }

  return submissions;
}
