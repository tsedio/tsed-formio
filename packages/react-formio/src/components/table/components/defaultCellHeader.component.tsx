import React from "react";
import { HeaderGroup } from "react-table";

export interface DefaultCellHeaderProps<Data extends object = any> extends Record<string, unknown> {
  column: HeaderGroup<Data>;
}

export function DefaultCellHeader<Data extends Record<string, unknown> = {}>({ column }: DefaultCellHeaderProps) {
  return (
    <div className={"table-cell-header"}>
      <div className='table-cell-header__label' {...column.getSortByToggleProps()}>
        <span>{column.render("Header")}</span>

        {column.render("ArrowSort")}
      </div>
      {column.canFilter ? <div className='table-cell-header__filter'>{column.render("Filter")}</div> : null}
    </div>
  );
}
