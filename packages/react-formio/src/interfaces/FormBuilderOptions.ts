import { FormBuilder } from "@formio/js";

import type { FormOptions } from "./FormOptions.js";

export type FormBuilderOptions = FormBuilder["options"] & {
  template?: string;
  iconset?: string;
  i18n?: FormOptions["i18n"];
};
