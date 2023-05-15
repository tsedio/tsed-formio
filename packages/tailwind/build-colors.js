const {
  theme: { colors }
} = require("./tailwind.config.js");
const fs = require("fs");

try {
  fs.mkdirSync("./dist", { recursive: true });
} catch (er) {}

fs.writeFileSync("./dist/colors.json", JSON.stringify(colors, null, 2), { encoding: "utf8" });
