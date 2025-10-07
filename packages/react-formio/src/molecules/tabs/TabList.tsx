import { Children, isValidElement, PropsWithChildren, ReactNode } from "react";

import { registerComponent } from "../../registries/components.js";

export function TabList(props: PropsWithChildren<{}>) {
  const before: ReactNode[] = [];
  const after: ReactNode[] = [];
  const items: ReactNode[] = [];

  Children.forEach(props.children, (child) => {
    if (isValidElement(child)) {
      if ((child.type as any)?.name === "Tab") {
        items.push(child);
        return;
      }
    }

    if (items.length > 0) {
      after.push(child);
    } else {
      before.push(child);
    }
  });

  return (
    <nav className='tw-tabs__header'>
      <div className='tw-tabs__header-wrapper'>
        <div className='tw-tabs__header-border' />
        {before}
        <div role='tablist'>{items}</div>
        {after}
      </div>
    </nav>
  );
}

registerComponent("TabList", TabList);
