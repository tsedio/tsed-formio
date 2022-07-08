import { Formio, Templates } from "@tsed/react-formio";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import tailwind from "../lib/index.js";
import "./styles/index.css";

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
