import type { FormType, RoleType, SubmissionType } from "@tsed/react-formio";
import { createAction } from "@tsed/redux-utils";

export const requestUser = createAction();
export const receiveUser = createAction<{ user: SubmissionType }>();
export const failUser = createAction<{ error: Error }>();
export const logoutUser = createAction();
export const submissionAccessUser = createAction<{ submissionAccess: any }>();
export const formAccessUser = createAction<{ formAccess: any }>();
export const projectAccessUser = createAction<{ projectAccess: any }>();
export const userRoles = createAction<{ roles: Record<string, RoleType> }>();
export const userForms = createAction<{ forms: Record<string, FormType> }>();
