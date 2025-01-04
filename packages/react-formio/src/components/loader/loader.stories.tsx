import { Loader } from "./loader.component";

export default {
  title: "@tsed/react-formio/Loader",
  component: Loader,
  argTypes: {},
  parameters: {}
};

export const Sandbox = (args: any) => {
  return <Loader {...args} />;
};

Sandbox.args = {
  isActive: true
};
