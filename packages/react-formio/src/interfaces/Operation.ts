export type PermissionsResolver = (data: any, ctx: any) => void;
export type OnClickOperation = (data: any, action: string) => void;

export type Operation = {
  /**
   * Action identifier
   */
  action: string;
  title?: string;
  /**
   * Alias action
   */
  alias?: string;
  path?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  icon?: string;
  /**
   * Custom ActionButton
   */
  ActionButton?: Node;
  /**
   * Permission resolver to display ActionButton
   */
  permissionsResolver?: PermissionsResolver;
};
