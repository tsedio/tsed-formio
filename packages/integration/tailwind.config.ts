import { tailwindPreset } from "@tsed/tailwind-formio/tailwind.preset";
import type { Config } from "tailwindcss";

export default {
  content: ["../*/src/**/*.{js,jsx,ts,tsx,mdx,ejs}"],
  darkMode: "class",
  presets: [tailwindPreset]
} satisfies Config;
