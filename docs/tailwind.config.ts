import { tailwindPreset } from "@tsed/vitepress-theme/tailwind.preset";
import type { Config } from "tailwindcss";

const config = {
  presets: [tailwindPreset as unknown as Config],
  darkMode: "class",
  content: [
    "./.vitepress/**/*.{js,ts,vue}",
    "./.vitepress/theme/**/*.{js,ts,vue}",
    "./node_modules/@tsed/vitepress-theme/**/*.{js,ts,vue}",
    "./**/*.md"
  ],
  // Same as the Ts.ED docs: the theme builds some classes from props (e.g. `gap-${padding}`, `bg-${bgColor}`),
  // so Tailwind can't find them by scanning the sources.
  safelist: [
    { pattern: /^bg-/ },
    { pattern: /^text-/ },
    { pattern: /^m-/ },
    { pattern: /^mx-/ },
    { pattern: /^p-/ },
    { pattern: /^px-/ },
    { pattern: /^gap-/ },
    { pattern: /^shadow-/ }
  ]
} satisfies Config;

export default config;
