import { getComponent, registerComponent } from "../../../registries/components";
import { type InputText as DefaultInputText } from "../../forms/input-text/InputText";
import type { FilterProps } from "../components/DefaultFilter";
import { FilterRangeOptions } from "./Filters";

export function RangeFilter<Data = any>({ header, options }: FilterProps<Data, FilterRangeOptions>) {
  const { column } = header;
  const InputText = getComponent<typeof DefaultInputText>("InputText");
  const columnFilterValue = header.column.getFilterValue();
  const min = options.min ?? column.getFacetedMinMaxValues()?.[0];
  const max = options.max ?? column.getFacetedMinMaxValues()?.[1];
  const step = options.step ?? 1;

  return (
    <div>
      <div className='flex space-x-2'>
        <div className='w-1/2'>
          <InputText
            type='number'
            size='small'
            {...{ min, max, step }}
            value={(columnFilterValue as [number, number])?.[0] ?? ""}
            onChange={(_, value) => column.setFilterValue((old: [number, number]) => [value, old?.[1]])}
            placeholder={`Min ${min !== undefined ? `(${min})` : ""}`}
          />
        </div>
        <div className='w-1/2'>
          <InputText
            type='number'
            size='small'
            {...{ min, max, step }}
            value={(columnFilterValue as [number, number])?.[1] ?? ""}
            onChange={(_, value) => column.setFilterValue((old: [number, number]) => [old?.[0], value])}
            placeholder={`Max ${max ? `(${max})` : ""}`}
          />
        </div>
      </div>
      <div className='h-1' />
    </div>
  );
}

registerComponent("Filter.range", RangeFilter);
