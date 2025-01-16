import cx from "classnames";

import { registerComponent } from "../../../../registries/components";
import { getEventValue } from "../../../../utils/getEventValue";
import { AllSelectProps, SelectOptionBaseProps } from "../Select.interfaces";

function Option({ value, label, ...props }: SelectOptionBaseProps) {
  return (
    <option {...props} value={value as any}>
      {label}
    </option>
  );
}

export function HTMLSelect({ name, id = name, size, value, multiple, onChange, options, placeholder, ...props }: AllSelectProps) {
  const hasGroup = !!options[0].options;

  return (
    <select
      {...(props as any)}
      data-testid={`select_${name}`}
      className={cx("form-control", size && `form-control-${size}`)}
      name={name}
      id={id}
      multiple={multiple}
      value={value || ("" as any)}
      onChange={(event) => {
        onChange && onChange(name, getEventValue(event));
      }}
    >
      {placeholder && !multiple && (
        <option value='' disabled>
          {placeholder}
        </option>
      )}
      {hasGroup
        ? options.map(({ label, options }) => {
            return (
              <optgroup key={label} label={label}>
                {options.map((props: SelectOptionBaseProps) => {
                  return <Option key={String(props.value)} {...props} />;
                })}
              </optgroup>
            );
          })
        : (options as SelectOptionBaseProps[]).map((props) => {
            return <Option key={String(props.value)} {...props} />;
          })}
    </select>
  );
}

registerComponent("Select.html5", HTMLSelect);
