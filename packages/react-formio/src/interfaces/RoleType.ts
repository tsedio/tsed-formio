export interface RoleType extends Record<string, unknown> {
  _id?: string;
  title: string;
  admin: boolean;
  default: boolean;
}
