import { FilterProps } from "react-table";

import { Select } from "../../../molecules/forms/select/Select";

export function useSelectColumnFilter<D extends Record<string, unknown> = {}>(props: FilterProps<D>) {
  const { column } = props;
  const { id, preFilteredRows } = column as any;
  const { choices: customChoices } = column as any;
  const { filterValue, setFilter } = column as any;

  const choices = (() => {
    if (customChoices) {
      if (typeof customChoices === "function") {
        return customChoices(props);
      }
      return customChoices;
    }

    return [...new Set(preFilteredRows.map((row: any) => row.values[id]))]
      .filter((value) => value)
      .map((value) => ({
        label: value,
        value
      }));
  })();

  const onChange = (_: string | undefined, value: any) => {
    setFilter(value || undefined);
  };

  return {
    value: filterValue,
    onChange,
    options: [{ value: "", label: "All" }].concat(choices)
  };
}

export function SelectColumnFilter<D extends Record<string, unknown> = {}>(props: FilterProps<D>) {
  const { value, options, onChange } = useSelectColumnFilter(props);

  return (
    <Select
      key={`filter-${props.column.id}`}
      name={`filter-${props.column.id}`}
      size={"small"}
      value={value}
      options={options}
      onChange={onChange}
    />
  );
}
