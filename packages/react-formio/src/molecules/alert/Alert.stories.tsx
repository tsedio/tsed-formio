import { Alert } from "./Alert";

/**
 * Alerts display brief messages for the user without interrupting their use of the app.
 *
 * ```tsx
 * import {Alert} from "@tsed/react-formio/molecules/alert/Alert";
 *
 * <Alert type="danger">
 *   Message
 * </Alert>
 * ```
 */
export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    message: {
      control: "text"
    },
    type: {
      control: "select",
      options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]
    }
  },
  parameters: {
    docs: {
      source: { language: "tsx" }
    }
  },
  tags: ["autodocs"]
};

export const Sandbox = {
  args: {
    type: "danger",
    message: "error placeholder"
  }
};
