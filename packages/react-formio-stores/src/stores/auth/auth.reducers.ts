import type { FormType, RoleType, SubmissionType } from "@tsed/react-formio";
import { createReducer } from "@tsed/redux-utils";

import {
  failUser,
  formAccessUser,
  logoutUser,
  projectAccessUser,
  receiveUser,
  requestUser,
  submissionAccessUser,
  userForms,
  userRoles
} from "./auth.actions";
import { AUTH } from "./auth.constant";

export interface AuthState<User = any> {
  init: boolean;
  isActive: boolean;
  user: null | SubmissionType<User>;
  authenticated: boolean;
  projectAccess: Record<string, string[]>;
  formAccess: Record<string, string[]>;
  submissionAccess: Record<string, string[]>;
  roles: Record<string, RoleType>;
  forms: Record<string, FormType>;
  is: Record<string, boolean>;
  error: null | Error;
}

function createInitialState(): AuthState {
  return {
    init: false,
    isActive: false,
    user: null,
    authenticated: false,
    submissionAccess: {},
    formAccess: {},
    projectAccess: {},
    roles: {},
    forms: {},
    is: {},
    error: null
  };
}

function mapProjectRolesToUserRoles(projectRoles: Record<string, any>, userRoles: any[]) {
  return Object.entries(projectRoles).reduce(
    (result, [name, role]) => ({
      ...result,
      [name]: userRoles.includes(role._id)
    }),
    {}
  );
}

function getUserRoles(projectRoles: Record<string, RoleType>) {
  return Object.keys(projectRoles).reduce(
    (result, name) => ({
      ...result,
      [name]: name === "anonymous"
    }),
    {}
  );
}

export const authReducer = createReducer<AuthState>(
  {
    [requestUser.toString()](state) {
      return {
        ...state,
        init: true,
        submissionAccess: false,
        isActive: true
      };
    },
    [receiveUser.toString()](state, { user }) {
      return {
        ...state,
        isActive: false,
        user,
        authenticated: true,
        is: mapProjectRolesToUserRoles(state.roles, user.roles),
        error: null
      };
    },
    [failUser.toString()](state, { error }: any) {
      return {
        ...state,
        isActive: false,
        is: getUserRoles(state.roles),
        error
      };
    },
    [logoutUser.toString()](state) {
      return {
        ...state,
        user: null,
        isActive: false,
        authenticated: false,
        is: getUserRoles(state.roles),
        error: null
      };
    },
    [submissionAccessUser.toString()](state, { submissionAccess }: any) {
      return {
        ...state,
        submissionAccess
      };
    },
    [formAccessUser.toString()](state, { formAccess }: any) {
      return {
        ...state,
        formAccess
      };
    },
    [userForms.toString()](state, { forms }: any) {
      return {
        ...state,
        forms
      };
    },
    [projectAccessUser.toString()](state, { projectAccess }: any) {
      return {
        ...state,
        projectAccess
      };
    },
    [userRoles.toString()](state, { roles }: any) {
      return {
        ...state,
        roles
      };
    },
    default(state: any) {
      if (!window.localStorage.getItem("formioUser")) {
        return {
          ...state,
          user: null,
          isActive: false,
          authenticated: false,
          is: getUserRoles(state.roles),
          error: null
        };
      }
      return state;
    }
  },
  createInitialState
)(AUTH);
