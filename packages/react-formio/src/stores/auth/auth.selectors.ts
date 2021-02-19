import get from "lodash/get";
import { RoleSchema, Submission } from "../../interfaces";
import { selectRoot } from "../root";
import { AuthState } from "./auth.reducers";

export const selectUser = <User = any>(state: any): null | Submission<User> =>
  get(selectRoot<AuthState>("auth", state), "user");

export const selectRoles = (state: any): Record<string, RoleSchema> =>
  get(selectRoot<AuthState>("auth", state), "roles");

export const selectIsAuthenticated = (state: any): boolean =>
  get(selectRoot<AuthState>("auth", state), "authenticated");
