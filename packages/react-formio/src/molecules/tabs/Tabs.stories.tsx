import "./all.js";

import { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

import { Icon } from "../../atoms/icon/Icon.js";
import { Button } from "../button/Button.js";
import { Tab } from "./Tab.js";
import { TabList } from "./TabList.js";
import { TabPanel } from "./TabPanel.js";
import { Tabs } from "./Tabs.js";
import { TabsBody } from "./TabsBody.js";

/**
 * Tabs component.
 *
 * You can import this component and use it like:
 *
 * ```tsx
 * import {Tabs} from "@tsed/react-formio/molecules/tabs/all"
 *
 * or
 *
 * import {Tabs} from "@tsed/react-formio/molecules/tabs/Tabs";
 * ```
 *
 * Tabs component support DI container and can be used with custom component. Here is the list of components that you can override:
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
  title: "Tabs",
  component: Tabs,
  argTypes: {
    reverse: {
      control: "boolean",
      description: "Reverse the order of the tabs"
    },
    selected: {
      control: { type: "number", min: 0, max: 10 },
      description: "Selected tab index"
    },
    items: {
      control: "object",
      description: "Array of tab items with label, icon, and content"
    }
  },
  parameters: {},
  args: {}
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Usage: Story = {
  args: {
    reverse: false,
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
    ],
    onClick: fn()
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Vérifie que tous les onglets sont présents
    await expect(canvas.getByRole("tab", { name: "Edit" })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", { name: "Data" })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", { name: "Preview" })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", { name: "Actions" })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", { name: "Access" })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", { name: "Export" })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", { name: "Delete" })).toBeInTheDocument();

    await waitFor(() => expect(canvas.getByRole("tabpanel")).toHaveTextContent("Edit"));

    // Clique sur l'onglet "Preview" et vérifie le contenu
    await userEvent.click(canvas.getByRole("tab", { name: "Preview" }));

    await expect(args.onClick).toHaveBeenCalledWith(
      expect.objectContaining({
        action: "preview"
      })
    );

    await waitFor(() => expect(canvas.getByRole("tabpanel")).toHaveTextContent("Preview"));

    // Clique sur l'onglet "Delete" et vérifie le contenu
    await userEvent.click(canvas.getByRole("tab", { name: "Delete" }));
    await expect(args.onClick).toHaveBeenCalledWith(
      expect.objectContaining({
        action: "delete"
      })
    );

    await waitFor(() => expect(canvas.getByRole("tabpanel")).toHaveTextContent("Trash"));
  },

  render: (args) => {
    const items: any[] = args.items.filter((item: any) => item.label || item.icon);

    return (
      <div className={"border-gray-300 border-1 shadow"}>
        <Tabs selected={args.selected}>
          <TabList>
            {items.map((item, index) => {
              return (
                <Tab
                  onClick={() => args.onClick(item)}
                  key={index}
                  icon={item.icon}
                  value={index}
                  className={args.reverse ? "-reverse" : ""}
                >
                  {item.label}
                </Tab>
              );
            })}
          </TabList>
          <TabsBody>
            {items.map((item, index) => {
              return (
                <TabPanel key={index} value={index}>
                  {item.children}
                </TabPanel>
              );
            })}
          </TabsBody>
        </Tabs>
      </div>
    );
  }
};

export const WithSelectedTab: Story = {
  args: {
    selected: 2,
    reverse: false,
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
  },
  render: (args) => {
    const items: any[] = args.items.filter((item: any) => item.label || item.icon);

    return (
      <div className={"border-gray-300 border-1 shadow"}>
        <Tabs selected={args.selected}>
          <TabList>
            {items.map((item, index) => {
              return (
                <Tab key={index} icon={item.icon} value={index}>
                  {item.label}
                </Tab>
              );
            })}
          </TabList>
          <TabsBody>
            {items.map((item, index) => {
              return (
                <TabPanel key={index} value={index}>
                  {item.children}
                </TabPanel>
              );
            })}
          </TabsBody>
        </Tabs>
      </div>
    );
  }
};

export const WithExtraControls: Story = {
  args: {
    reverse: false,
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
  },
  render: (args) => {
    const items: any[] = args.items.filter((item: any) => item.label || item.icon);

    return (
      <div className={"border-gray-300 border-1 shadow"}>
        <Tabs selected={args.selected}>
          <TabList>
            <Button variant='link' aria-label='Previous tab'>
              <Icon name='chevron-left' />
            </Button>

            {items.map((item, index) => {
              return (
                <Tab key={index} icon={item.icon} value={index} className={args.reverse ? "-reverse" : ""}>
                  {item.label}
                </Tab>
              );
            })}
            <Button variant='link' aria-label='Add tab'>
              <Icon name='plus' />
            </Button>
          </TabList>
          <TabsBody>
            {items.map((item, index) => {
              return (
                <TabPanel key={index} value={index}>
                  {item.children}
                </TabPanel>
              );
            })}
          </TabsBody>
        </Tabs>
      </div>
    );
  }
};
