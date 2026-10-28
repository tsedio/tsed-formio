import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

import { storybookLinks } from "./plugins/storybookLinks.js";
import { DEFAULT_STORYBOOK_URL, normalizeStorybookBase, storybookUrl } from "./storybook.js";

const SITE_URL = "https://formio.tsed.dev";
const STORYBOOK_URL = normalizeStorybookBase(process.env.STORYBOOK_URL || DEFAULT_STORYBOOK_URL);

const Guide = [
  {
    text: "Introduction",
    items: [
      { text: "Getting started", link: "/getting-started" },
      { text: "Tailwind theme", link: "/guide/tailwind-theme" },
      { text: "Register a React component", link: "/guide/register-react-component" },
      { text: "Hooks", link: "/guide/hooks" },
      { text: "Optimize your bundle size", link: "/guide/optimize-your-bundle-size" }
    ]
  },
  {
    text: "Migration",
    items: [
      { text: "Migrate to v3", link: "/migrations/migrate-to-v3" },
      { text: "v2 to v3 (detailed guide)", link: "/migrations/v2-to-v3" }
    ]
  }
];

const Components = [
  {
    text: "Components",
    items: [
      { text: "Form", link: "/components/form" },
      { text: "Form Builder", link: "/components/form-builder" },
      { text: "Form Edit", link: "/components/form-edit" },
      { text: "Form Views", link: "/components/form-views" },
      { text: "Forms Table", link: "/components/forms-table" },
      { text: "Submissions Table", link: "/components/submissions-table" }
    ]
  },
  {
    text: "Storybook",
    items: [
      { text: "All components", link: storybookUrl("", STORYBOOK_URL), target: "_self" },
      { text: "Atoms", link: storybookUrl("/docs/atoms-icon--docs", STORYBOOK_URL), target: "_self" },
      { text: "Molecules", link: storybookUrl("/docs/molecules-table--docs", STORYBOOK_URL), target: "_self" },
      { text: "Organisms", link: storybookUrl("/docs/organisms-form-form--docs", STORYBOOK_URL), target: "_self" },
      { text: "Styling", link: storybookUrl("/docs/styling-tailwind--docs", STORYBOOK_URL), target: "_self" }
    ]
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ts.ED Formio",
  titleTemplate: ":title - Ts.ED Formio",
  description: "A React library and a Tailwind theme to render and build forms based on the Form.io platform.",
  lastUpdated: true,
  cleanUrls: false,
  srcExclude: ["llm-migrate-v2-to-v3.md", "README.md", "public/**/*.md"],
  sitemap: {
    hostname: SITE_URL
  },
  vite: {
    plugins: [llmstxt()]
  },
  head: [
    ["link", { rel: "icon", type: "image/png", href: "https://tsed.dev/tsed-og.png" }],
    ["meta", { name: "theme-color", content: "#0069c2" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:site_name", content: "Ts.ED Formio" }],
    ["meta", { property: "og:image", content: "https://tsed.dev/tsed-og.png" }],
    ["meta", { property: "og:url", content: SITE_URL }]
  ],
  themeConfig: {
    logo: "https://tsed.dev/tsed.svg",
    siteTitle: "Formio",
    siteUrl: SITE_URL,
    repo: "tsedio/tsed-formio",
    // Required by @tsed/vitepress-theme (no API reference pages here)
    apiUrl: "",
    // Used by GithubContributors (home page)
    githubProxyUrl: "https://api.github.com/repos/tsedio/tsed-formio",
    storybookUrl: STORYBOOK_URL,
    editLink: {
      pattern: "https://github.com/tsedio/tsed-formio/edit/master/docs/:path"
    },
    search: {
      provider: "local"
    },
    nav: [
      { text: "Guide", items: Guide },
      { text: "Components", items: Components },
      { text: "Storybook", link: STORYBOOK_URL, target: "_self" },
      {
        text: "v3",
        items: [
          { text: "Releases", link: "https://github.com/tsedio/tsed-formio/releases" },
          { text: "Contributing", link: "https://github.com/tsedio/tsed-formio/blob/master/CONTRIBUTING.md" },
          { text: "Ts.ED", link: "https://tsed.dev" }
        ]
      }
    ],
    sidebar: {
      "/getting-started": Guide,
      "/guide/": Guide,
      "/migrations/": Guide,
      // Storybook links stay in the nav only: they are not docs pages
      "/components/": Components.slice(0, 1)
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/tsedio/tsed-formio" },
      { icon: "slack", link: "https://slack.tsed.dev" },
      { icon: "twitter", link: "https://x.com/TsED_io" }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2016-present Romain Lenzotti"
    }
  },
  markdown: {
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(storybookLinks, { base: STORYBOOK_URL });
    }
  }
});
