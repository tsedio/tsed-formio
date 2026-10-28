/**
 * Helpers to build links from the VitePress docs to the Storybook site.
 *
 * Storybook is deployed under `/storybook/` next to the docs. Override the location with the
 * `STORYBOOK_URL` env variable (e.g. `STORYBOOK_URL=http://localhost:6006/ yarn docs:dev`).
 */
export const DEFAULT_STORYBOOK_URL = "/storybook/";

export function normalizeStorybookBase(base: string = DEFAULT_STORYBOOK_URL) {
  return base.endsWith("/") ? base : `${base}/`;
}

/**
 * Turn a Storybook reference into a URL.
 *
 * Accepted references:
 * - `/docs/organisms-form-form--docs` or `/story/organisms-form-form--basic-usage-with-form` (Storybook path),
 * - `organisms-form-form--docs` (an id: ids ending with `--docs` open the docs page, others the story),
 * - an empty string (Storybook home).
 */
export function storybookUrl(ref: string = "", base: string = DEFAULT_STORYBOOK_URL) {
  const root = normalizeStorybookBase(base);
  const path = ref.replace(/^\?path=/, "");

  if (!path) {
    return root;
  }

  if (path.startsWith("/")) {
    return `${root}?path=${path}`;
  }

  return `${root}?path=/${path.endsWith("--docs") ? "docs" : "story"}/${path}`;
}

/**
 * URL of the isolated story iframe, used to embed a live example in a docs page.
 */
export function storybookIframeUrl(id: string, base: string = DEFAULT_STORYBOOK_URL) {
  return `${normalizeStorybookBase(base)}iframe.html?id=${id}&viewMode=story`;
}
