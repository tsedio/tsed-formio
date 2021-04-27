import classnames from "classnames";
import React, { PropsWithChildren } from "react";

export interface CardProps {
  label: string;
  className?: string;
}

export function Card({
  children,
  label,
  className
}: PropsWithChildren<CardProps>) {
  return (
    <div className={classnames("card", className)}>
      <div className={"card-header "}>
        <h4 className={"card-title"} role={"card-heading"}>
          {label}
        </h4>
      </div>
      <div className={"card-body"} role={"card-body"}>
        {children}
      </div>
    </div>
  );
}
