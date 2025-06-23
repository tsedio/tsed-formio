import classnames from "classnames";

import { registerComponent } from "../../registries/components.js";
import { useActiveTab, useTabsUid } from "./hooks/tabControl.js";

export interface TabPanelProps {
  className?: string;
  /**
   * Tab panel index<br/>
   * _Can be **0** or **1** indexed_
   */
  value: number;
}

export function TabPanel({ value, className, children }: React.PropsWithChildren<TabPanelProps>) {
  const tabSelected = useActiveTab();
  const uid = useTabsUid();
  const isActive = tabSelected === value;

  return (
    <div
      id={`TabPanel_${value}_${uid}`}
      data-name={`TabPanel_${value}`}
      role='tabpanel'
      aria-hidden={!isActive}
      aria-labelledby={`Tab_${value}_${uid}`}
      tabIndex={isActive ? 0 : -1}
      className={classnames("tw-tabs__panel", className, {
        "-active": isActive
      })}
    >
      {children}
    </div>
  );
}

registerComponent("TabPanel", TabPanel);
