import { tailwindPreset } from "./dist/tailwind/preset.js";

export default {
  content: ["../packages/*/src/**/*.{js,jsx,ts,tsx,mdx,ejs}"],
  darkMode: "class", // or 'media' or 'class'
  presets: [tailwindPreset]
};
