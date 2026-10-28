#!/usr/bin/env node
/**
 * Check that every Storybook reference used in the docs exists in the Storybook build.
 *
 * Usage: node ./scripts/check-storybook-links.mjs [path/to/storybook-static]
 * (defaults to ../storybook-static, run `yarn storybook:build` at the repository root first).
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const docsDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const storybookDir = resolve(process.argv[2] || join(docsDir, "../storybook-static"));
const indexFile = join(storybookDir, "index.json");

if (!existsSync(indexFile)) {
  console.error(`Storybook index not found: ${indexFile}. Run "yarn storybook:build" first.`);
  process.exit(1);
}

const ids = new Set(Object.keys(JSON.parse(readFileSync(indexFile, "utf8")).entries));

function* markdownFiles(dir) {
  for (const name of readdirSync(dir)) {
    if (["node_modules", ".vitepress", "public"].includes(name)) continue;
    const file = join(dir, name);
    if (statSync(file).isDirectory()) yield* markdownFiles(file);
    else if (name.endsWith(".md")) yield file;
  }
}

const patterns = [
  // [label](storybook:/docs/xxx--docs) or [label](storybook:xxx--story)
  /\]\(storybook:(?:\/(?:docs|story)\/)?([^)\s]*)\)/g,
  // <StoryEmbed id="xxx" /> and <StorybookLink to="xxx" />
  /<Story(?:Embed|bookLink)[^>]*?\s(?:id|to)="(?:\/(?:docs|story)\/)?([^"]*)"/g
];

let count = 0;
const errors = [];

for (const file of markdownFiles(docsDir)) {
  const content = readFileSync(file, "utf8");
  for (const pattern of patterns) {
    for (const [, id] of content.matchAll(pattern)) {
      if (!id) continue; // Storybook home
      count++;
      if (!ids.has(id)) errors.push(`${relative(docsDir, file)}: unknown Storybook id "${id}"`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`${count} Storybook references checked against ${relative(process.cwd(), indexFile)}.`);
