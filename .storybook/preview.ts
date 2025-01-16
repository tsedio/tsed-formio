import "./styles/index.css";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";

// eslint-disable-next-line react-hooks/rules-of-hooks
Formio.use(tailwind);
Templates.framework = "tailwind";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      source: { language: "tsx" }
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  tags: ["autodocs"]
};

export default preview;
