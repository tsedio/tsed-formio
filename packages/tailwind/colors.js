export const COLORS = Object.keys(require("./tailwind.config").theme.colors).reduce((obj, key) => {
  return {
    ...obj,
    [key]: key
  };
}, {});

export const COLORS_LIST = Object.keys(COLORS)
  .filter((key) => !["current"].includes(key) && !key.match("-active"))
  .sort((a, b) => (a < b ? -1 : 1));
