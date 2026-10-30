import type MarkdownIt from "markdown-it";

import { storybookUrl } from "../storybook.js";

export const STORYBOOK_PROTOCOL = "storybook:";

/**
 * Markdown-it plugin: resolve `storybook:` links to the Storybook site.
 *
 * ```md
 * [Form](storybook:/docs/organisms-form-form--docs)
 * [Form story](storybook:organisms-form-form--basic-usage-with-form)
 * [Storybook](storybook:)
 * ```
 *
 * The link gets `target="_self"` so the VitePress router does not try to resolve it as a docs page.
 */
export function storybookLinks(md: MarkdownIt, options: { base: string }) {
  const defaultRender =
    md.renderer.rules.link_open ?? ((tokens, idx, opts, _env, self) => self.renderToken(tokens, idx, opts));

  md.renderer.rules.link_open = (tokens, idx, opts, env, self) => {
    const token = tokens[idx];
    const href = token.attrGet("href");

    if (href?.startsWith(STORYBOOK_PROTOCOL)) {
      token.attrSet("href", storybookUrl(href.slice(STORYBOOK_PROTOCOL.length), options.base));
      token.attrSet("target", "_self");
    }

    return defaultRender(tokens, idx, opts, env, self);
  };
}
