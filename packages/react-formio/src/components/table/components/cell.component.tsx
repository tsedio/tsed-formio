import React from "react";

export function Cell({ value, render = (f: any) => f }: any): JSX.Element {
  if (value === undefined) {
    return <></>;
  }

  const rendered = render(value);

  if (value !== rendered) {
    return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
  }

  return <span>{String(value)}</span>;
}
