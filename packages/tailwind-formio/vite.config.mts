import {fileURLToPath} from "node:url";
import compile from "lodash/template";
import {globbySync} from "globby";
import {extname, relative} from "path";
import preserveDirectives from "rollup-preserve-directives";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";
import {resolve} from "node:path";

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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ejsPlugin(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      aliasesExclude: [],
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["**/*.spec.{ts,tsx}", "**/*.stories.{ts,tsx}", "**/__*__/**"]
    })
  ],
  resolve: {
    alias: {}
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"]
    },
    copyPublicDir: false,
    rollupOptions: {
      external: (source, importer) => {
        return source.includes("node_modules");
      },
      plugins: [preserveDirectives() as any],
      input: Object.fromEntries(
        globbySync("src/**/*.{ts,tsx}", {
          ignore: ["**/*.spec.{ts,tsx}", "**/*.stories.{ts,tsx}", "**/__*__/**"]
        }).map((file) => {
          return [
            // The name of the entry point
            // src/nested/foo.ts becomes nested/foo
            relative("src", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // src/nested/foo.ts becomes /project/src/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url))
          ];
        })
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "chunks/[name].js",
        entryFileNames: "[name].js",
        globals: {
          react: "React"
        }
      }
    }
  }
});
