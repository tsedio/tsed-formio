import { createRequire } from "node:module";
import { dirname, join } from "node:path";

import type { StorybookConfig } from "@storybook/react-vite";

// @ts-ignore
const require = createRequire(import.meta.url);

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
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("storybook-addon-mock"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
