import { useCallback, useState } from "react";
import { FilterProps } from "react-table";
import { InputText } from "../../input-text/inputText.component";

export function DefaultColumnFilter<D extends Record<string, unknown> = {}>(
  props: FilterProps<D> & { filterId: string; setFilterId: any }
) {
  const {
    filterId,
    setFilterId,
    column: { id, filterValue, setFilter }
  } = props;

  const [value, setValue] = useState(filterValue || "");

  const onChange = useCallback(
    (name: string, value: any) => {
      setValue(value);
      setFilterId(id);
      setFilter(value || undefined);
    },
    [id, setValue, setFilterId, setFilter]
  );

  return (
    <InputText
      size={"sm"}
      id={id}
      name={id}
      key={id}
      autoFocus={id === filterId}
      value={value}
      onChange={onChange}
      placeholder={"Search records..."}
    />
  );
}
