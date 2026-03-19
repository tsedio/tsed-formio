import { useMemo } from "react";

import type { AllSelectProps } from "../Select.interface";

export function mapOptions(options: AllSelectProps["options"]) {
  if (options.find((item) => item.group)) {
    let groupsMap = new Map();

    function mapItem(item: AllSelectProps["options"][0]) {
      return {
        ...item,
        customProperties: {
          ...item.data,
          template: item.template
        }
      };
    }

    options.forEach((item) => {
      if (item.group) {
        // legacy model group
        const group = groupsMap.get(item.group) || [];

        group.push(item);

        groupsMap.set(item.group, group);
      } else {
        const group = groupsMap.get("default") || [];
        group.push(mapItem(item));
        groupsMap.set("default", group);
      }
    });

    return [...groupsMap.entries()].map(([label, options]) => {
      return {
        label,
        options
      };
    });
  }

  return options;
}

export function useOptions<Data = string>({ options }: AllSelectProps<Data>) {
  return useMemo(() => {
    return mapOptions(options);
  }, [options]);
}
