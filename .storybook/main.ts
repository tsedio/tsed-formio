import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  staticDirs: ["../packages/tailwind-formio/build"],

  stories: [
    "../stories/Getting-started.mdx",
    "../stories/**/*.mdx",
    {
      titlePrefix: "Molecules",
      directory: "../packages/react-formio/src/molecules"
    },
    // {
    //   titlePrefix: "@tsed/react-formio/Organisms",
    //   directory: "../packages/react-formio/src/organisms/**/*.stories.@(js|jsx|ts|tsx)"
    // },
    "../packages/react-formio/src/components/**/*.mdx",
    "../packages/react-formio/src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/react-formio/src/components/**/*.story.@(js|jsx|ts|tsx)",
    "../packages/tailwind-formio/src/**/*.mdx",
    "../packages/tailwind-formio/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/tailwind-formio/src/**/*.story.@(js|jsx|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-links",
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
