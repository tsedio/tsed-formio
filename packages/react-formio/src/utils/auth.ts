export function hasRole(auth: any, role: string): boolean {
  return !!Object.hasOwnProperty.call(auth.is, role) && auth.is[role];
}

export function hasRoles(auth: any, roles: string | string[]): boolean {
  roles = [].concat(roles as never);

  if (roles.includes("go") && !auth.user.data.isGo) {
    return false;
  }

  return !!roles
    .filter((item) => item !== "go")
    .find((role) => hasRole(auth, role));
}

export function isAuthorized(auth: any, roles: string[] = []) {
  if (auth && auth.authenticated) {
    if (roles.length) {
      return hasRoles(auth, roles);
    }
    return true;
  }

  return false;
}
