import "./styles/index.css";

import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// eslint-disable-next-line react-hooks/rules-of-hooks
Formio.use(tailwind);
Templates.framework = "tailwind";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
