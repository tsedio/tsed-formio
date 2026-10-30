import "./styles/index.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

// eslint-disable-next-line react-hooks/rules-of-hooks
Formio.use(tailwind);

Templates.framework = "tailwind";

// Relative URL so the mock worker is found when Storybook is served under a sub-path (e.g. /storybook/)
initialize({
  serviceWorker: {
    url: "./mockServiceWorker.js"
  }
});

let mswWarned = false;

// Don't block stories when the mock worker can't start (browser without service worker support,
// file:// or embedded previews): stories render, only the mocked requests are missing.
const safeMswLoader: typeof mswLoader = async (context) => {
  try {
    return await mswLoader(context);
  } catch (error) {
    if (!mswWarned) {
      mswWarned = true;
      console.warn("[MSW] Mocks disabled, the service worker could not be registered:", error);
    }

    return {};
  }
};

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
  loaders: [safeMswLoader],
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
