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
      <Tabs {...tabs} i18n={(f) => f}>
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
      icon: "chevron-left",
      back: true
    },
    {
      action: "edit",
      exact: true,
      icon: "edit",
      label: "Edit"
    },
    {
      action: "submissions",
      exact: false,
      icon: "data",
      label: "Data"
    },
    {
      action: "preview",
      exact: true,
      icon: "test-tube",
      label: "Preview"
    },
    {
      action: "actions",
      exact: false,
      icon: "paper-plane",
      label: "Actions"
    },
    {
      action: "access",
      exact: true,
      icon: "lock",
      label: "Access"
    },
    {
      action: "export",
      exact: true,
      icon: "download",
      label: "Export"
    },
    {
      action: "delete",
      exact: true,
      icon: "trash",
      label: "Delete",
      roles: ["administrator", "owner"]
    }
  ]
};

function AddButton({ onCreate }: any) {
  return (
    <div>
      <button onClick={onCreate}>+</button>
    </div>
  );
}

function HeaderChildren() {
  return <div className={"px-3 bg-gray-100 border-b-1 border-gray-light"}>test</div>;
}

export const WithCloseable = (args: any) => {
  args.value = args.value === undefined ? 0 : args.value;
  const tabs = useTabs(args);

  return (
    <div className={"border-gray-300 border-1 shadow"}>
      <Tabs {...tabs} i18n={(f) => f} AddButton={AddButton} HeaderChildren={HeaderChildren}>
        <div className={"p-5"}>{tabs?.current?.action}</div>
      </Tabs>
    </div>
  );
};

WithCloseable.args = {
  reverse: true,
  items: [
    {
      exact: true,
      action: 0,
      label: "Test (0)"
    },
    {
      exact: true,
      action: 1,
      label: "Test (1)"
    }
  ]
};
