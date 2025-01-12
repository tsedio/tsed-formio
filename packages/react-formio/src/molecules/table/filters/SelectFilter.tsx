import { getComponent, registerComponent } from "../../../registries/components";
import type { Select as DefaultSelect } from "../../forms/select/Select";
import { SelectOptionProps } from "../../forms/select/Select.interface";
import type { FilterProps } from "../components/DefaultFilter";
import { useUniqValues } from "../hooks/useUniqValues";
import { FilterSelectOptions } from "./Filters";

export function SelectFilter<Data = any>({ header, options }: FilterProps<Data, FilterSelectOptions>) {
  const Select = getComponent<typeof DefaultSelect>("Select");
  const columnFilterValue = header.column.getFilterValue();
  const uniqValues = useUniqValues<Data>({ header, filterVariant: "text" });
  console.log(uniqValues);
  const opts =
    options.layout === "choicesjs"
      ? {
          placeholder: undefined
        }
      : {
          placeholder: `Filter by ${header.column.columnDef.header}`
        };

  const listOptions = (
    [
      {
        label: `Filter by ${header.column.columnDef.header}`,
        value: ""
      }
    ] as SelectOptionProps[]
  ).concat(options.options || uniqValues.map((value: any) => ({ label: value, value })));

  return (
    <>
      <Select<string>
        size='small'
        {...(options as any)}
        {...opts}
        options={listOptions}
        name={`filter_${header.column.id}`}
        data-testid={`filter_${header.column.id}`}
        value={columnFilterValue as string}
        onChange={(_, value) => header.column.setFilterValue(value)}
      />
    </>
  );
}

registerComponent("Filter.select", SelectFilter);
