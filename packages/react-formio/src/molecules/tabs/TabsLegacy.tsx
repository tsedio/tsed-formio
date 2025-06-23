import "./all.js";

import { CSSProperties, ReactNode } from "react";

import { getComponent } from "../../registries/components.js";
import type { Tab as DefaultTab } from "./Tab.js";
import type { TabList as DefaultTabList } from "./TabList.js";
import type { TabPanel as DefaultTabPanel } from "./TabPanel.js";
import type { Tabs as DefaultTabs } from "./Tabs.js";
import type { TabsBody as DefaultTabsBody } from "./TabsBody.js";

export interface TabsItemProps extends Record<string, any> {
  label?: string;
  icon?: string;
  children?: ReactNode;
}

export interface TabsLegacyProps extends Record<string, any> {
  AddButton?: any;
  current?: TabsItemProps;
  items?: TabsItemProps[];
  style?: CSSProperties;
  className?: string;
  reverse?: boolean;
  onClick?: (item: TabsItemProps) => void;
  i18n?: (f: string) => string;
}

export function TabsLegacy({
  style,
  current,
  items = [],
  HeaderChildren,
  AddButton,
  className,
  onClick,
  i18n = (f) => f,
  reverse,
  after,
  ...additionalProps
}: TabsLegacyProps) {
  const Tab = getComponent<typeof DefaultTab>("Tab");
  const TabsBody = getComponent<typeof DefaultTabsBody>("TabsBody");
  const TabList = getComponent<typeof DefaultTabList>("TabList");
  const TabPanel = getComponent<typeof DefaultTabPanel>("TabPanel");
  const Tabs = getComponent<typeof DefaultTabs>("Tabs");
  const tabs = items.filter((item) => item.label || item.icon);

  return (
    <Tabs className={className} style={style}>
      <div>
        <TabList>
          {tabs.map((item, index) => {
            return (
              <Tab
                key={index}
                onClick={() => {
                  onClick && onClick(item);
                }}
                icon={item.icon}
                value={index}
                className={reverse ? "-reverse" : ""}
                after={after}
              >
                {i18n(item.label || "")}
              </Tab>
            );
          })}
          {AddButton && <AddButton {...additionalProps} current={current} />}
        </TabList>
        {HeaderChildren && <HeaderChildren {...additionalProps} current={current} />}
      </div>
      <TabsBody>
        {tabs.map((item, index) => {
          return (
            <TabPanel key={index} value={index}>
              {item.children || item.content}
            </TabPanel>
          );
        })}
      </TabsBody>
    </Tabs>
  );
}
