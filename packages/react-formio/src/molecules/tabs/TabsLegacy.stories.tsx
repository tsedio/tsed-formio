import "./all.js";

import { Meta, StoryObj } from "@storybook/react";

import { TabsLegacy } from "./TabsLegacy.js";

/**
 * TabsLegacy component.
 *
 * You can import this component and use it like:
 *
 * ```tsx
 * import {Tabs} from "@tsed/react-formio/molecules/tabs/TabsLegacy";
 * ```
 *
 * TabsLegacy component support DI container and can be used with custom component. Here is the list of components that you can override:
 *
 * - Tab
 * - TabList
 * - TabPanel
 * - Tabs
 * - TabsBody
 *
 * ```tsx
 * function CustomTab() {
 *
 * }
 *
 * registerComponent("Tab", CustomTab);
 * ```
 */
export default {
  title: "TabsLegacy",
  component: TabsLegacy,
  argTypes: {},
  parameters: {},
  render: (args: any) => {
    return (
      <div className={"border-gray-300 border-1 shadow"}>
        <TabsLegacy {...args} i18n={(f) => f} />
      </div>
    );
  }
} satisfies Meta<typeof TabsLegacy>;

type Story = StoryObj<typeof TabsLegacy>;

export const Sandbox: Story = {
  args: {
    items: [
      {
        action: "edit",
        exact: true,
        icon: "edit",
        label: "Edit",
        children: <div className='bg-red-100 p-5'>Edit</div>
      },
      {
        action: "submissions",
        exact: false,
        icon: "data",
        label: "Data",
        children: <div className='bg-orange-100 p-5'>Data</div>
      },
      {
        action: "preview",
        exact: true,
        icon: "test-tube",
        label: "Preview",
        children: <div className='bg-yellow-100 p-5'>Preview</div>
      },
      {
        action: "actions",
        exact: false,
        icon: "paper-plane",
        label: "Actions",
        children: <div className='bg-green-100 p-5'>Actions</div>
      },
      {
        action: "access",
        exact: true,
        icon: "lock",
        label: "Access",
        children: <div className='bg-blue-100 p-5'>Access</div>
      },
      {
        action: "export",
        exact: true,
        icon: "download",
        label: "Export",
        children: <div className='bg-purple-100 p-5'>Export</div>
      },
      {
        action: "delete",
        exact: true,
        icon: "trash",
        label: "Delete",
        roles: ["administrator", "owner"],
        children: <div className='bg-gray-100 p-5'>Trash</div>
      }
    ]
  }
};
