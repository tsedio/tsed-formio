import "./styles/index.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

// eslint-disable-next-line react-hooks/rules-of-hooks
Formio.use(tailwind);
Templates.framework = "tailwind";

/** @type { import("@storybook/react-vite").Preview } */
const preview = {
  parameters: {
    docs: {
      source: { language: "tsx" }
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  tags: ["autodocs"],
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark"
      },
      defaultTheme: "light"
    })
  ]
};

export default preview;
