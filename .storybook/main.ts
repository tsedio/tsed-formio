import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  staticDirs: ["../packages/tailwind-formio/build"],

  stories: [
    "../stories/Getting-started.mdx",
    "../stories/**/*.mdx",
    "../packages/{tailwind-formio,react-formio}/src/**/*.mdx",
    "../packages/{tailwind-formio,react-formio}/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/{tailwind-formio,react-formio}/src/**/*.story.@(js|jsx|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "storybook-addon-mock"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;
