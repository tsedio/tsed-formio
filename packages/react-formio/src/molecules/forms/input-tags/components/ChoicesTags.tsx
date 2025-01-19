import Choices from "@formio/choices.js";
import { useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

import { registerComponent } from "../../../../registries/components";
import { cleanFormControlProps } from "../../form-control/FormControl";
import type { InputTagsProps } from "../InputTags.interface";

export function useChoiceTags<Data = string>(props: InputTagsProps<Data>) {
  const { value, onChange, name = "", delimiter, customProperties, ...otherProps } = props;
  const ref = useRef<HTMLInputElement | null>(null);
  const instanceRef = useRef<Choices | null>(null);

  const onAdd = useDebouncedCallback((add: Data) => {
    const values = ((value || []) as Data[]).concat(add);

    onChange?.(name, [...values]);
  }, 100);

  const onDelete = useDebouncedCallback((remove: Data) => {
    const values = (value || []).filter((v) => v !== remove);

    onChange?.(name, [...values]);
  });

  useEffect(() => {
    if (ref.current) {
      const instance = new Choices(ref.current!, {
        duplicateItemsAllowed: false,
        ...customProperties,
        delimiter,
        editItems: true,
        removeItemButton: true
      });

      instance.setValue((value || []) as string[]);

      instanceRef.current = instance;

      instance.passedElement.element.addEventListener("addItem", (event: { detail: { value: unknown } }) => {
        onAdd(event.detail.value as Data);
      });

      instance.passedElement.element.addEventListener("removeItem", (event: { detail: { value: unknown } }) => {
        onDelete(event.detail.value as Data);
      });
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
      }
    };
  }, [delimiter]);

  return {
    otherProps: {
      ...otherProps,
      name
    },
    ref,
    instanceRef
  };
}

export function ChoicesTags<Data = string>(props: InputTagsProps<Data>) {
  const { ref, otherProps } = useChoiceTags<Data>(props);

  return <input type='text' {...cleanFormControlProps(otherProps)} ref={ref} />;
}

registerComponent("InputTags.choicesjs", ChoicesTags);
