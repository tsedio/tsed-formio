import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, vi } from "vitest";

import { Tab } from "./Tab.js";
import { TabList } from "./TabList.js";
import { TabPanel } from "./TabPanel.js";
import { Tabs } from "./Tabs.js";
import { TabsBody } from "./TabsBody.js";

const props = {
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
  onClick: vi.fn()
};

function TestComponent({
  selected,
  onClick,
  reverse,
  items
}: {
  selected?: number;
  onClick?: (item: any) => void;
  reverse?: boolean;
  items: any[];
}) {
  return (
    <Tabs selected={selected}>
      <TabList>
        {items.map((item, index) => {
          return (
            <Tab onClick={() => onClick?.(item)} key={index} icon={item.icon} value={index} className={reverse ? "-reverse" : ""}>
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
  );
}

describe("<Tabs>", () => {
  it("should display the tabs component and children", async () => {
    render(<TestComponent {...props} />);

    // Vérifie que tous les onglets sont présents
    expect(screen.getByRole("tab", { name: "Edit" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Data" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Preview" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Actions" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Access" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Export" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Delete" })).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole("tabpanel")).toHaveTextContent("Edit"));

    // Clique sur l'onglet "Preview" et vérifie le contenu
    await userEvent.click(screen.getByRole("tab", { name: "Preview" }));

    expect(props.onClick).toHaveBeenCalledWith(
      expect.objectContaining({
        action: "preview"
      })
    );

    await waitFor(() => expect(screen.getByRole("tabpanel")).toHaveTextContent("Preview"));

    // Clique sur l'onglet "Delete" et vérifie le contenu
    await userEvent.click(screen.getByRole("tab", { name: "Delete" }));

    expect(props.onClick).toHaveBeenCalledWith(
      expect.objectContaining({
        action: "delete"
      })
    );

    await waitFor(() => expect(screen.getByRole("tabpanel")).toHaveTextContent("Trash"));
  });
});
