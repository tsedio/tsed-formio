import type { FormOptions } from "../interfaces/index.js";

export function useI18n(labels?: FormOptions["i18n"]) {
  return {
    t: (key: string, defaultValue: string = key) => {
      return labels?.[key] || defaultValue;
    }
  };
}
