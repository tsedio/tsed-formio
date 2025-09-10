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
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "storybook-addon-mock"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
  // core: {
  // builder: {
  //   name: "@storybook/builder-vite"
  //   // options: {
  //   //   viteConfigPath: "./vite.storybook.config.js"
  //   // }
  // }
  // }
};

export default config;
