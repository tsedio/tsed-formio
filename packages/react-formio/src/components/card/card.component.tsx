import React from "react";

export interface CardProps {
  children: any;
  label: string;
  className?: string;
}

export function Card({ children, label, className }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className={"card-header "}>
        <h4 className={"card-title"}>{label}</h4>
      </div>
      <div className={"card-body"}>{children}</div>
    </div>
  );
}
