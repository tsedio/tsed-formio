import React from "react";
import { FilterProps } from "react-table";

import { Select } from "../../select/select.component";

export function useSelectColumnFilter<D extends Record<string, unknown> = {}>(props: FilterProps<D>) {
  const { column } = props;
  const { id, preFilteredRows } = column;
  const { choices: customChoices } = column as any;
  const { filterValue, setFilter } = column;

  const choices = (() => {
    if (customChoices) {
      if (typeof customChoices === "function") {
        return customChoices(props);
      }
      return customChoices;
    }

    return [...new Set(preFilteredRows.map((row) => row.values[id]))]
      .filter((value) => value)
      .map((value) => ({
        label: value,
        value
      }));
  })();

  const onChange = (_: string, value: any) => {
    setFilter(value || undefined);
  };

  return {
    value: filterValue,
    onChange,
    choices: [{ value: "", label: "All" }].concat(choices)
  };
}

export function SelectColumnFilter<D extends Record<string, unknown> = {}>(props: FilterProps<D>) {
  const { value, choices, onChange } = useSelectColumnFilter(props);

  return (
    <Select
      key={`filter-${props.column.id}`}
      name={`filter-${props.column.id}`}
      size={"sm"}
      value={value}
      choices={choices}
      onChange={onChange}
    />
  );
}
