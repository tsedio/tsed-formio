import { tailwindPreset } from "@tsed/tailwind-formio/tailwind.preset";

export default {
  content: ["packages/*/src/**/*.{js,jsx,ts,tsx,mdx,ejs}"],
  darkMode: "class", // or 'media' or 'class'
  presets: [tailwindPreset]
};
