import { Templates } from "formiojs";

export function iconClass(
  iconset: string | undefined,
  name: string,
  spinning?: boolean
): string {
  return Templates.current.iconClass(
    iconset || Templates.current.defaultIconset,
    name,
    spinning
  );
}
