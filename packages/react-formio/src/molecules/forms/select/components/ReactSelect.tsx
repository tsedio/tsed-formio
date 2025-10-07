import Select, { OptionsOrGroups } from "react-select";
import makeAnimated from "react-select/animated";

import { registerComponent } from "../../../../registries/components";
import { AllSelectProps } from "../Select.interface";

const animatedComponents = makeAnimated();

function findValues(value: string | string[], options: AllSelectProps["options"][0]) {
  const localValue: string[] = [].concat(value as never);

  return options
    .flatMap((item: any) => {
      if (localValue.includes(item.value)) {
        return item;
      }

      if (item.options) {
        return item.options.filter((option: any) => localValue.includes(option.value));
      }
    })
    .filter(Boolean);
}

function mapValues(value: { label: string; value: never[] } | null, multiple?: boolean) {
  return multiple
    ? []
        .concat(value as never)
        .filter(Boolean)
        .map((v: { value: unknown }) => v.value)
    : (value as any).value;
}

export function ReactSelect(props: AllSelectProps) {
  const { placeholder, options, multiple, searchEnabled = true, customProperties = {} } = props;

  const values = findValues(props.value!, props.options);

  return (
    <Select<{ label: string; value: never | never[] }>
      {...customProperties}
      id={props.id}
      placeholder={placeholder}
      className='react-select-container'
      classNamePrefix='react-select'
      name={props.name || ""}
      components={animatedComponents}
      options={options as OptionsOrGroups<any, any>}
      isDisabled={props.disabled}
      isSearchable={searchEnabled}
      isMulti={props.multiple as false}
      value={multiple ? values : values[0]}
      onChange={(value) => {
        props.onChange?.(props.name, mapValues(value, props.multiple));
      }}
    />
  );
}

registerComponent("Select.react", ReactSelect);
