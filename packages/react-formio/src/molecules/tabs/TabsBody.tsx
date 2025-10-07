import { registerComponent } from "../../registries/components.js";

export function TabsBody(props: React.PropsWithChildren<{}>) {
  return (
    <div title={"tabs-body"} data-testid={"TabsBody"} className={"tw-tabs__body"}>
      {props.children}
    </div>
  );
}

registerComponent("TabsBody", TabsBody);
