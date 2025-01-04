import { Alert } from "./alert.component";

export default {
  title: "@tsed/react-formio/Alert",
  component: Alert,
  argTypes: {},
  parameters: {}
};

export const Sandbox = (args: any) => {
  return <Alert {...args} />;
};

Sandbox.args = {
  error: "error placeholder"
};
