import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  define: {
    "process.env.NODE_ENV": `'${process.env.NODE_ENV}'`
  }
});
