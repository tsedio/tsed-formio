import { palette as colors } from "./palette.js";
import { themeColors } from "./theme.js";

const mergedColors = {
  ...colors,
  ...themeColors
};

export { mergedColors as colors };
export const COLORS = Object.keys(mergedColors).reduce((obj, key) => {
  return {
    ...obj,
    [key]: key
  };
}, {});

export const COLORS_LIST = Object.keys(COLORS)
  .filter((key) => !["current"].includes(key) && !key.match("-active"))
  .sort((a, b) => (a < b ? -1 : 1));
