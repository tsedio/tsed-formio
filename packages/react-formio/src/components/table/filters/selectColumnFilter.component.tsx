import React from "react";
import { FilterProps } from "react-table";
import { Select } from "../../select/select.component";

export function SelectColumnFilter<D extends Record<string, unknown> = {}>({
  column
}: FilterProps<D>) {
  const { filterValue, setFilter } = column;
  const { choices = [] } = column as any;

  return (
    <Select
      key={`filter-${column.id}`}
      name={`filter-${column.id}`}
      size={"sm"}
      value={filterValue}
      choices={choices}
      onChange={(name, value) => {
        setFilter(value || undefined);
      }}
    />
  );
}
