import type { Form } from "@formio/core";

import type { ComponentType } from "./ComponentType.js";

export type FormType = Omit<Form, "components"> & {
  components: ComponentType[];
} & Record<string, unknown>;
