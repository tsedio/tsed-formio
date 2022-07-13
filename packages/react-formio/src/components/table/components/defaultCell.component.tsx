import React from "react";

export function DefaultCell({ value, render = (f: any) => f }: any): JSX.Element {
  if (value === undefined) {
    return <span></span>;
  }

  const rendered = render(value);

  if (value !== rendered) {
    return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
  }

  return <span>{String(value)}</span>;
}
