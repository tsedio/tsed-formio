import classnames from "classnames";
import type { CSSProperties, PropsWithChildren } from "react";

import { registerComponent } from "../../registries/components.js";
import { TabsProvider } from "./context/TabControl.js";

export interface TabsProps extends Record<string, any> {
  style?: CSSProperties;
  className?: string;
  selected?: number;
}

export function Tabs({ style, selected, children, className }: PropsWithChildren<TabsProps>) {
  return (
    <div data-testid={"Tabs"} className={classnames("tw-tabs", className)} style={style}>
      <TabsProvider selected={selected}>{children}</TabsProvider>
    </div>
  );
}

registerComponent("Tabs", Tabs);
