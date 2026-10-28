#!/usr/bin/env node
/**
 * Assemble the website: VitePress at the root, Storybook under /storybook/.
 *
 * Usage: node docs/scripts/assemble-website.mjs [outDir]
 * Expects `docs/.vitepress/dist` (yarn docs:build) and `storybook-static` (yarn storybook:build).
 * Default outDir: `website` at the repository root.
 */
import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const docsDist = join(rootDir, "docs/.vitepress/dist");
const storybookDist = join(rootDir, "storybook-static");
const outDir = resolve(rootDir, process.argv[2] || "website");

for (const dir of [docsDist, storybookDist]) {
  if (!existsSync(join(dir, "index.html"))) {
    console.error(`Missing build output: ${relative(rootDir, dir)}`);
    process.exit(1);
  }
}

rmSync(outDir, { recursive: true, force: true });
cpSync(docsDist, outDir, { recursive: true });
cpSync(storybookDist, join(outDir, "storybook"), { recursive: true });

console.log(`Website assembled in ${relative(process.cwd(), outDir) || "."} (docs at /, Storybook at /storybook/).`);
