import Choices from "@formio/choices.js";
import cx from "classnames";
import { useEffect, useMemo, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

import { registerComponent } from "../../../../registries/components";
import { cleanFormControlProps } from "../../form-control/FormControl";
import type { AllSelectProps } from "../Select.interface";
import { callbackOnCreateTemplates } from "./choices.template";

export function useChoices({
  name,
  disabled,
  multiple,
  options,
  placeholder,
  searchEnabled = true,
  customProperties = {},
  size,
  value,
  required,
  onChange
}: AllSelectProps) {
  const ref = useRef<any>();
  const choicesRef = useRef<Choices>();

  const opts = useMemo(() => {
    const isSelected = (itemValue: any) => [].concat(value as any).includes(itemValue as never);

    const opts = options.map((item) => {
      if (item.options) {
        item = {
          ...item,
          choices: item.options.map((item: any) => ({
            ...item,
            selected: isSelected(item.value)
          }))
        };
      }

      return {
        ...item,
        selected: isSelected(item.value)
      };
    });

    if (!multiple && placeholder) {
      return [
        {
          disabled: required,
          label: placeholder,
          value: ""
        },
        ...opts
      ];
    }

    return opts;
  }, [options, value, required, multiple, placeholder]);

  const onChangeCallback = useDebouncedCallback((name: string | undefined, value: any) => {
    onChange?.(name, value);
  }, 50);

  useEffect(() => {
    if (choicesRef.current) {
      if (multiple) {
        choicesRef.current.clearStore();
        choicesRef.current.setChoices(opts, "value", "label", true);
      } else {
        choicesRef.current.setChoices(opts, "value", "label", true);
      }
    }
  }, [opts]);

  useEffect(() => {
    if (!choicesRef.current) {
      const { allowHTML = true, silent = true, removeItemButton = true, shouldSort = false, itemSelectText = "" } = customProperties;
      choicesRef.current = new Choices(ref.current, {
        ...customProperties,
        allowHTML,
        silent,
        searchEnabled,
        removeItemButton,
        choices: opts,
        placeholder: placeholder as string,
        placeholderValue: "" as string,
        itemSelectText,
        shouldSort,
        callbackOnCreateTemplates
      } as any);
    }

    if (disabled) {
      choicesRef.current?.disable();
    } else {
      choicesRef.current?.enable();
    }

    const addItem = ({ detail: { value: newValue } }: any) => {
      onChangeCallback(name, multiple ? [...new Set([...new Set(value as string[]), newValue])] : newValue);
    };

    const removeItem = ({ detail: { value: newValue } }: any) => {
      if (multiple) {
        onChangeCallback(
          name,
          (value as string[]).filter((v) => v !== newValue)
        );
      } else {
        onChangeCallback(name, undefined as any);
      }
    };

    choicesRef.current?.passedElement.element.addEventListener("addItem", addItem);
    choicesRef.current?.passedElement.element.addEventListener("removeItem", removeItem);

    return () => {
      choicesRef.current?.passedElement.element.removeEventListener("addItem", addItem);
      choicesRef.current?.passedElement.element.removeEventListener("removeItem", removeItem);
    };
  }, [disabled, onChange, opts, placeholder, searchEnabled, size, value]);

  return {
    ref,
    choicesRef
  };
}

export function ChoiceSelect(props: AllSelectProps) {
  const { ref } = useChoices({
    ...props,
    searchEnabled: !props.disableSearch
  });

  return (
    <select
      ref={ref}
      data-testid={`select_${props.name}`}
      {...cleanFormControlProps(props as any, [
        "className",
        "size",
        "value",
        "options",
        "placeholder",
        "onChange",
        "allowHTML",
        "silent",
        "removeItemButton",
        "shouldSort",
        "itemSelectText",
        "customProperties"
      ])}
      className={cx("form-control", props.size && `form-control-${props.size}`)}
    />
  );
}

registerComponent("Select.choicesjs", ChoiceSelect);
