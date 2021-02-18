import React from "react";
import { FilterProps } from "react-table";
import { callLast } from "../../../utils/callLast";
import { InputText } from "../../input-text/inputText.component";

export function DefaultColumnFilter<D extends Record<string, unknown> = {}>(
  props: FilterProps<D> & { filterId: string; setFilterId: any }
) {
  const {
    filterId,
    setFilterId,
    column: { id, filterValue, setFilter }
  } = props;

  const change = React.useMemo(() => {
    return callLast((value: any) => {
      setFilterId(id);
      setFilter(value || undefined);
    }, 200);
  }, [id, setFilterId, setFilter]);

  const [value, setValue] = React.useState(filterValue || "");

  return (
    <InputText
      size={"sm"}
      id={id}
      name={id}
      key={id}
      autoFocus={id === filterId}
      value={value}
      onChange={(value) => {
        setValue(value);
        change(value);
      }}
      placeholder={"Search records..."}
    />
  );
}
