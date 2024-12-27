import fs from "node:fs/promises";

import colors from "tailwindcss/colors.js";

import tailwindConfig from "./tailwind.config.js";

const mergedColors = {
  ...colors,
  ...tailwindConfig.theme.extend.colors
};

await fs.mkdir("./dist", { recursive: true }).catch(() => {});

await fs.writeFile("./dist/colors.json", JSON.stringify(mergedColors, null, 2), { encoding: "utf8" });
