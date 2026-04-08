import { useState } from "react";

export const useValue = (args: any) => {
  const [value, setValue] = useState(args.value);

  return {
    ...args,
    value,
    onChange(name: string, value: any) {
      setValue(value);
      args.onChange(name, value);
    }
  };
};
