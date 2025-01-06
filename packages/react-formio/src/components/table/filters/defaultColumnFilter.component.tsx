import { useState } from "react";
import { FilterProps } from "react-table";

import { InputText } from "../../input-text/inputText.component";

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
      size={"sm"}
      id={id}
      name={id}
      key={id}
      autoFocus={id === filterId}
      value={value}
      onChange={(name: string, value: any) => {
        setValue(value);
        setFilterId(id);
        setFilter(value || undefined);
      }}
      placeholder={"Search records..."}
    />
  );
}
