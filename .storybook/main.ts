import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  staticDirs: ["../packages/tailwind-formio/build"],

  stories: [
    "../stories/Getting-started.mdx",
    "../stories/**/*.mdx",
    {
      titlePrefix: "Styling",
      directory: "../packages/tailwind-formio"
    },
    {
      titlePrefix: "Atoms",
      directory: "../packages/react-formio/src/atoms"
    },
    {
      titlePrefix: "Molecules",
      directory: "../packages/react-formio/src/molecules"
    },
    {
      titlePrefix: "Organisms",
      directory: "../packages/react-formio/src/organisms"
    }
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
