import { Card } from "./card.component";

export default {
  title: "@tsed/react-formio/Card",
  component: Card,
  argTypes: {},
  parameters: {}
};

export const Sandbox = (args: any) => {
  return <Card {...args}>{args.children}</Card>;
};

Sandbox.args = {
  label: "label",
  children: "test"
};
