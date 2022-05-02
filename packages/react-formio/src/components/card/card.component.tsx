import classnames from "classnames";
import React, { PropsWithChildren } from "react";

export interface CardProps {
  children: React.ReactNode ,
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
        <h4 className={"card-title"}>{label}</h4>
      </div>
      <div className={"card-body"} role={"article"}>
        {children}
      </div>
    </div>
  );
}
