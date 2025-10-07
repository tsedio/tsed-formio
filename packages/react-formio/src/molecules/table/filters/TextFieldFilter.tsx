import { getComponent, registerComponent } from "../../../registries/components";
import type { InputText as DefaultInputText } from "../../forms/input-text/InputText";
import type { FilterProps } from "../components/DefaultFilter";
import { useUniqValues } from "../hooks/useUniqValues";
import { FilterTextOptions } from "./Filters";

export function TextFieldFilter<Data = any>({ header, options }: FilterProps<Data, FilterTextOptions>) {
  const InputText = getComponent<typeof DefaultInputText>("InputText");
  const columnFilterValue = header.column.getFilterValue();
  const uniqValues = useUniqValues<Data>({ header, filterVariant: "text" });
  const datalistId = `data_list_${header.column.id}`;

  return (
    <>
      {!options.disableDatalist && (
        <datalist id={datalistId}>
          {uniqValues.map((value: any) => (
            <option value={value} key={value} />
          ))}
        </datalist>
      )}
      <InputText<string>
        size='small'
        placeholder={`Filter by ${header.column.columnDef.header}`}
        {...options}
        name={`filter_${header.column.id}`}
        data-testid={`filter_${header.column.id}`}
        value={(columnFilterValue ?? "") as string}
        list={datalistId}
        onChange={(_, value) => header.column.setFilterValue(value)}
      />
    </>
  );
}

registerComponent("Filter.text", TextFieldFilter);
