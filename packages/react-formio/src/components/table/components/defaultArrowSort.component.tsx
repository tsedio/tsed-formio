import React from "react";
import { iconClass } from "../../../utils/iconClass";

export function DefaultArrowSort({ column }: any) {
  const { isSorted, isSortedDesc } = column;
  return (
    <span className={"table-arrow-sort"}>
      {isSorted ? (
        <i
          className={iconClass(
            undefined,
            isSortedDesc ? "sort-up" : "sort-down"
          )}
        />
      ) : (
        ""
      )}
    </span>
  );
}
