import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";

import "../src/styles/index.css";
import "@tsed/tailwind-formio/styles/index.css";

Formio.use(tailwind);
Templates.framework = "tailwind";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};
