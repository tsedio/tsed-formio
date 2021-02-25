import get from "lodash/get";
import { FormSchema } from "../../interfaces/FormSchema";
import { AuthState } from "./auth.reducers";

export function hasRole(auth: AuthState, role: string): boolean {
  return auth.is[role];
}

export function hasRoles(auth: AuthState, roles: string[]): boolean {
  roles = [].concat(roles);

  return !!roles.find((role) => hasRole(auth, role));
}

export function isAuthorized(auth: AuthState, roles: string[] = []): boolean {
  if (auth && auth.authenticated) {
    if (roles.length) {
      return !!hasRoles(auth, roles);
    }
    return true;
  }

  return false;
}

export function checkRoleFormAccess(
  auth: AuthState,
  form?: Partial<FormSchema>,
  roles?: string[]
) {
  if (roles && roles.length) {
    if (isAuthorized(auth, roles)) {
      return true;
    }

    return !!(
      roles.includes("owner") && get(form, "owner") === get(auth, "user._id")
    );
  }

  return true;
}
