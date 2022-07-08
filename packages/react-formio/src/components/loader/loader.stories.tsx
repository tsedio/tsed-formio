import React from "react";

import { Loader } from "./loader.component";

export default {
  title: "ReactFormio/Loader",
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
