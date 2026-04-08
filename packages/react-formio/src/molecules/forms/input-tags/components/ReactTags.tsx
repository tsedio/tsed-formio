import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

import { registerComponent } from "../../../../registries/components";
import { InputTagsProps } from "../InputTags.interface";

const animatedComponents = makeAnimated();

export function ReactTags(props: InputTagsProps) {
  const { value = [], placeholder, customProperties = {} } = props;

  return (
    <CreatableSelect
      {...customProperties}
      id={props.id}
      placeholder={placeholder}
      className='react-select-container'
      classNamePrefix='react-select'
      name={props.name || ""}
      components={animatedComponents}
      isDisabled={props.disabled}
      isMulti
      value={value.map((v) => {
        return { label: v, value: v };
      })}
      onChange={(value) => {
        props.onChange?.(
          props.name,
          value.map(({ value }) => {
            return value;
          })
        );
      }}
    />
  );
}

registerComponent("InputTags.react", ReactTags);
