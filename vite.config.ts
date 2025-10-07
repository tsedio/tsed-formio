import { join } from "node:path";

import react from "@vitejs/plugin-react";
import compile from "lodash/template";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const ejsPlugin = () => {
  const opts = {
    evaluate: /\{%([\s\S]+?)%\}/g,
    interpolate: /\{\{([\s\S]+?)\}\}/g,
    escape: /\{\{\{([\s\S]+?)\}\}\}/g,
    variable: "ctx"
  };

  return {
    name: "vite-plugin-ejs",
    transform(src: string, id: string) {
      // Vérifie si le fichier est un fichier .ejs
      if (id.endsWith(".ejs")) {
        const template = compile(src, opts);

        // Renvoie le contenu JavaScript
        return {
          code: `export default ${template.toString()}`,
          map: null
        };
      }
    }
  };
};

const root = join(import.meta.dirname);

export default defineConfig({
  // @ts-ignore
  plugins: [
    ejsPlugin(),
    react(),
    svgr(),
    tsconfigPaths({
      projects: [join(root, "tsconfig.json")]
    })
  ],
  base: "./",
  resolve: {
    // conditions: ["tsed-source", "import", "module", "browser", "default"],
    alias: {}
  },
  define: {
    "process.env.NODE_ENV": `'${process.env.NODE_ENV}'`
  }
});
