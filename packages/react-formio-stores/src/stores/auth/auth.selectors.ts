import type { RoleType, SubmissionType } from "@tsed/react-formio";
import get from "lodash/get";

import { selectRoot } from "../root";
import { AUTH } from "./auth.constant";
import { AuthState } from "./auth.reducers";

export const selectAuth = (state: any) => selectRoot<AuthState>(AUTH, state);

export const selectUser = <User = any>(state: any): null | SubmissionType<User> => get(selectAuth(state), "user");

export const selectRoles = (state: any): Record<string, RoleType> => get(selectAuth(state), "roles");

export const selectIsAuthenticated = (state: any): boolean => get(selectAuth(state), "authenticated");
