import classnames from "classnames";
import { PropsWithChildren } from "react";

import { registerComponent } from "../../registries/components.js";

export interface CardProps {
  label: string;
  className?: string;
}

export function Card({ children, label, className }: PropsWithChildren<CardProps>) {
  return (
    <div className={classnames("card", className)}>
      <div className={"card-header "}>
        <h4 className={"card-title"}>{label}</h4>
      </div>
      <div className={"card-body"} role={"article"}>
        {children}
      </div>
    </div>
  );
}

registerComponent("Card", Card);
