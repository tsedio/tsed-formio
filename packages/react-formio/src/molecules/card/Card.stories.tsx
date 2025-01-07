import { Card } from "./Card";

/**
 * Cards contain content and actions about a single subject.
 *
 * ```ts
 * import {Card} from "@tsed/react-formio/molecules/card/Card";
 * ```
 */
export default {
  title: "Card",
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
