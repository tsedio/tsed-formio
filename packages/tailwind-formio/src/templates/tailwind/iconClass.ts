import { BxIconsMapping } from "./bxIconsMapping.js";
import { LucideIconsMapping } from "./lucideIconsMapping.js";

export default (iconset: string | undefined, name: string, spinning?: boolean) => {
  if (iconset === "lu") {
    name = LucideIconsMapping[name] || name;

    return [`icon-${name}`, spinning && (name === "bx-radio-circle" ? "animate-burst" : "animate-spin")].filter(Boolean).join(" ");
  }
  if (iconset === "bx") {
    if (BxIconsMapping[name]) {
      name = BxIconsMapping[name];
    } else {
      name = `${iconset}-${name}`;
    }

    return [iconset, name, spinning && (name === "bx-radio-circle" ? "animate-burst" : "animate-spin")].filter(Boolean).join(" ");
  }

  return `${iconset} ${iconset}-${name}`;
};
