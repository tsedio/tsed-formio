import {fileURLToPath} from "node:url";

import react from "@vitejs/plugin-react";
import {globbySync} from "globby";
import {extname, relative} from "path";
import preserveDirectives from "rollup-preserve-directives";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";
import {resolve} from "node:path";
import pkg from "./package.json" with {type: "json"};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
      external: [
        ...Object.keys(pkg.peerDependencies || {}),
        "react",
        "react-dom",
        "react/jsx-runtime",
        /lodash\/.*/,
        /formiojs\/.*/,
        /@tsed\/.*/
      ],
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
