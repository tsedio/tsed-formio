import type { ComponentType } from "react";

import { getComponent, registerComponent } from "../../../registries/components";
import type { FormControl as DefaultFormControl } from "../form-control/FormControl";
import { useOptions } from "./hooks/useOptions";
import { AllSelectProps } from "./Select.interface";

let uuid = 0;

export function Select<Data = string>(props: AllSelectProps<Data>) {
  const { className, name = "", id = `field-select-${++uuid}`, label, description = "" } = props;

  const options = useOptions<Data>({
    ...props,
    value: (Array.isArray(props.value) ? props.value : [props.value]) as any
  });

  const FormControl = getComponent<typeof DefaultFormControl>("FormControl");
  const Component = getComponent<ComponentType<AllSelectProps<Data>>>(["Select." + props.layout, "Select.html5"]);

  return (
    <FormControl {...(props as any)} id={id} description={description} shadow={false} className={className} label={label}>
      <Component {...props} options={options} name={name} id={id} />
    </FormControl>
  );
}

registerComponent("Select", Select);
