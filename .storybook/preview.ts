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
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export default preview;
