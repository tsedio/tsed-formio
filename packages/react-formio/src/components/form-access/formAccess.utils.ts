import { ExtendedComponentSchema } from "formiojs";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import noop from "lodash/noop";
import { FormSchema, Submission } from "../../interfaces";
import { RoleSchema } from "../../interfaces/RoleSchema";
import {
  getAccessPermissionForm,
  getSubmissionPermissionForm
} from "./formAccess.schema";

export interface Choice {
  label: string;
  value: string;
}

export interface Access {
  roles: string[];
  type: string;
}

export type AccessRoles = Record<string, string[]>;

export type FormAccessSchema = {
  access: FormSchema;
  submissionAccess: FormSchema;
};

export type SubmissionAccess = {
  access: Submission<AccessRoles>;
  submissionAccess: Submission<AccessRoles>;
};

function rolesToChoices(roles: RoleSchema[]): Choice[] {
  return Object.values(roles).map((role) => {
    return {
      label: role.title,
      value: role._id
    };
  });
}

function accessToHash(keys: string[], access: Access[] = []): AccessRoles {
  const hash = Object.values(access).reduce((o: any, role: any) => {
    o[role.type] = role.roles;
    return o;
  }, {});

  return keys.reduce((data, key) => {
    return {
      ...data,
      [key]: hash[key] || []
    };
  }, {});
}

function hashToAccess(data: AccessRoles) {
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

export function getFormAccess(roles: RoleSchema[]): FormAccessSchema {
  const choices = rolesToChoices(roles);
  const access = getAccessPermissionForm({ choices });
  const submissionAccess = getSubmissionPermissionForm({ choices });

  return {
    access,
    submissionAccess
  };
}

export function dataAccessToSubmissions(
  form: Partial<FormSchema>,
  formAccess: FormAccessSchema
): SubmissionAccess {
  const getKeys = (components: ExtendedComponentSchema[]) =>
    components.map(({ key }) => key);

  return {
    access: {
      data: accessToHash(getKeys(formAccess.access.components), form.access)
    },
    submissionAccess: {
      data: accessToHash(
        getKeys(formAccess.submissionAccess.components),
        form.submissionAccess
      )
    }
  };
}

export function submissionsToDataAccess(
  form: Partial<FormSchema>,
  submissions: SubmissionAccess
): Partial<FormSchema> {
  return {
    ...cloneDeep(form),
    access: hashToAccess(submissions.access.data),
    submissionAccess: hashToAccess(submissions.submissionAccess.data)
  };
}

export function shouldUpdate(
  type: string,
  submission: Submission<AccessRoles>,
  submissions: SubmissionAccess
) {
  return !isEqual(submission.data, submissions[type].data);
}

export function updateSubmissions(
  type: string,
  submission: Submission<AccessRoles>,
  submissions: SubmissionAccess,
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
