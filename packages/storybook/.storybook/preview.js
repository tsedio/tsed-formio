import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";
import "../src/styles/index.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

Formio.use(tailwind);
Templates.framework = "tailwind";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};
