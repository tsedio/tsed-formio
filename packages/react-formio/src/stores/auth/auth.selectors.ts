import get from "lodash/get";
import { RoleSchema, Submission } from "../../interfaces";
import { selectRoot } from "../root";
import { AUTH } from "./auth.constant";
import { AuthState } from "./auth.reducers";

export const selectAuth = (state: any) => selectRoot<AuthState>(AUTH, state);

export const selectUser = <User = any>(state: any): null | Submission<User> =>
  get(selectAuth(state), "user");

export const selectRoles = (state: any): Record<string, RoleSchema> =>
  get(selectAuth(state), "roles");

export const selectIsAuthenticated = (state: any): boolean =>
  get(selectAuth(state), "authenticated");
