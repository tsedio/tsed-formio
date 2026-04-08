import clsx from "clsx";
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
    <div data-testid={"Tabs"} className={clsx("tw-tabs", className)} style={style}>
      <TabsProvider selected={selected}>{children}</TabsProvider>
    </div>
  );
}

registerComponent("Tabs", Tabs);
