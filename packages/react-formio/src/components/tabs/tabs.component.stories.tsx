import React, { useState } from "react";
import { Tabs } from "./tabs.component";

const useTabs = (args: any) => {
  const [current, onClick] = useState(args.value);

  return {
    ...args,
    current,
    onClick
  };
};

export default {
  title: "ReactFormio/Tabs",
  component: Tabs,
  argTypes: {},
  parameters: {}
};

export const Sandbox = (args: any) => {
  const tabs = useTabs(args);

  return (
    <div className={"border-gray-300 border-1 shadow"}>
      <Tabs {...tabs}>
        <div className={"p-5"}>{tabs?.current?.action}</div>
      </Tabs>
    </div>
  );
};

Sandbox.args = {
  items: [
    {
      action: "back",
      exact: true,
      icon: "bx bx-chevron-left",
      back: true
    },
    {
      action: "edit",
      exact: true,
      icon: "bx bxs-edit mr-2 -ml-1",
      label: "Edit"
    },
    {
      action: "submissions",
      exact: false,
      icon: "bx bx-data mr-2 -ml-1",
      label: "Data"
    },
    {
      action: "preview",
      exact: true,
      icon: "bx bx-test-tube mr-2 -ml-1",
      label: "Preview"
    },
    {
      action: "actions",
      exact: false,
      icon: "bx bx-paper-plane mr-2 -ml-1",
      label: "Actions"
    },
    {
      action: "access",
      exact: true,
      icon: "bx bx-lock mr-2 -ml-1",
      label: "Access"
    },
    {
      action: "export",
      exact: true,
      icon: "bx bx-download mr-2 -ml-1",
      label: "Export"
    },
    {
      action: "delete",
      exact: true,
      icon: "bx bx-trash mr-2 -ml-1",
      label: "Delete",
      roles: ["administrator", "owner"]
    }
  ]
};
