import { EventEmitter, Form } from "@formio/js";

import type { FormType } from "./FormType.js";

export type FormOptions = Form["options"] & {
  events?: EventEmitter;
  currentForm?: FormType;
};
