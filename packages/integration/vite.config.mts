import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    conditions: [
      // "source",
      "import",
      "module",
      "browser",
      "default"
    ],
    alias: {}
  },
});
