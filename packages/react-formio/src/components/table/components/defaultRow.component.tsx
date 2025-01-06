import classnames from "classnames";
import omit from "lodash/omit";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Row } from "react-table";

import { iconClass } from "../../../utils/iconClass";
import { useDndRow } from "../hooks/useDragnDropRow.hook";
import { DefaultCells } from "./defaultCells.component";

export interface DefaultRowProps<Data extends object = {}>
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "onClick" | "onDrag" | "onDrop"> {
  onClick: (data: any, action: string) => void;
  row: Row<Data>;
  index: number;
  onDrop: (item: Data) => void;
  onDrag: (index: number, hoverIndex: number) => void;
  enableDragNDrop?: boolean;
}

export function DefaultDndRow<Data extends object = {}>(props: DefaultRowProps<Data>) {
  const { isDragging, dragRef, dropRef, opacity } = useDndRow(props);

  return (
    <tr ref={dropRef} style={{ opacity }}>
      {/* eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role */}
      <td ref={dragRef} role='cell' style={{ cursor: isDragging ? "grabbing" : "grab" }} className='align-middle'>
        <div className='flex items-center justify-center'>
          <i className={classnames(iconClass(undefined, "dots-vertical-rounded"))} />
        </div>
      </td>
      <DefaultCells<Data> {...props} />
    </tr>
  );
}

export function DefaultRow<Data extends object = {}>({ onClick, row, enableDragNDrop, onDrop, onDrag, ...props }: DefaultRowProps<Data>) {
  const opts = {
    ...props,
    onClick: () => onClick(row.original, "row"),
    ...row.getRowProps()
  };

  if (enableDragNDrop) {
    return <DefaultDndRow<Data> {...opts} row={row} onDrag={onDrag} onDrop={onDrop} />;
  }

  return (
    <tr {...omit(opts, ["key"])}>
      <DefaultCells<Data> row={row} />
    </tr>
  );
}
