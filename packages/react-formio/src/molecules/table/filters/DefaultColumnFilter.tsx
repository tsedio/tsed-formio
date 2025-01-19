import { useState } from "react";
import { FilterProps } from "react-table";

import { InputText } from "../../../molecules/forms/input-text/InputText";

export function DefaultColumnFilter<D extends Record<string, unknown> = {}>(
  props: FilterProps<D> & {
    filterId: string;
    setFilterId: any;
    column: { id: string; filterValue: any; setFilter: any };
  }
) {
  const {
    filterId,
    setFilterId,
    column: { id, filterValue, setFilter }
  } = props;

  const [value, setValue] = useState(filterValue || "");

  /* eslint-disable jsx-a11y/no-autofocus */
  return (
    <InputText
      size={"small"}
      id={id}
      name={id}
      key={id}
      autoFocus={id === filterId}
      value={value}
      onChange={(_, value: any) => {
        setValue(value);
        setFilterId(id);
        setFilter(value || undefined);
      }}
      placeholder={"Search records..."}
    />
  );
}
