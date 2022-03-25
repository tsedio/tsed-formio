import React from "react";
import { FilterProps } from "react-table";
import { Select } from "../../select/select.component";

export function SelectColumnFilter<D extends Record<string, unknown> = {}>({
  column
}: FilterProps<D>) {
  const { id, preFilteredRows, filterValue, setFilter } = column;

  const choices = [...new Set(preFilteredRows.map((row) => row.values[id]))]
    .filter((value) => value)
    .map((value) => ({ label: value, value }));

  return (
    <Select
      key={`filter-${column.id}`}
      name={`filter-${column.id}`}
      size={"sm"}
      value={filterValue}
      choices={[{ value: "", label: "All" }].concat(choices)}
      onChange={(name, value) => {
        setFilter(value || undefined);
      }}
    />
  );
}
