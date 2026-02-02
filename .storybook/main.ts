import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  staticDirs: ["../packages/tailwind-formio/build"],

  stories: [
    "../stories/GettingStarted.mdx",
    "../stories/TailwindTheme.mdx",
    "../stories/RegisterReactComponent.mdx",
    "../stories/Hooks.mdx",
    "../stories/OptimizeYourBundleSize.mdx",
    "../stories/MigrateToV3.mdx",
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
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    },
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: "./vite.config.ts"
      }
    },
    disableTelemetry: true
  }
};

export default config;
