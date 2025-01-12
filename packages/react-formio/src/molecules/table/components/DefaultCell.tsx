import { registerComponent } from "../../../registries/components";

export interface DefaultCellProps<Data = any> {
  value: Data;
  render?: (value: Data) => any;
}

export function DefaultCell<Data = any>({ value, render = (f: any) => f }: DefaultCellProps<Data>): JSX.Element {
  if (value === undefined) {
    return <span></span>;
  }

  const rendered = render(value);

  if (value !== rendered) {
    return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
  }

  return <span>{String(value)}</span>;
}

registerComponent("Cell", DefaultCell);
