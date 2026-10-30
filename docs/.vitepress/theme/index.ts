// https://vitepress.dev/guide/custom-theme
import "./style.css";

import { DefaultTheme, DocActions } from "@tsed/vitepress-theme";
import type { Theme } from "vitepress";
import { h } from "vue";

import StoryEmbed from "./components/StoryEmbed.vue";
import StorybookLink from "./components/StorybookLink.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => h(DocActions)
    });
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx);
    ctx.app.component("StoryEmbed", StoryEmbed);
    ctx.app.component("StorybookLink", StorybookLink);
  }
} satisfies Theme;
