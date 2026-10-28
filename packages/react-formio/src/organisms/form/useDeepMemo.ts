import isEqualWith from "lodash/isEqualWith";
import { useRef } from "react";

function isClassInstance(value: unknown): boolean {
  if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);

  return proto !== null && proto !== Object.prototype;
}

/**
 * Deep equality for form schemas and options.
 *
 * Functions and class instances (event emitters, hooks, i18n helpers...) are compared by kind only:
 * an inline `hooks: { beforeSubmit: () => {} }` must not count as a change on every render.
 */
export function isDeepEqual(a: unknown, b: unknown): boolean {
  return isEqualWith(a, b, (x, y) => {
    if (typeof x === "function" && typeof y === "function") {
      return true;
    }

    if (isClassInstance(x) && isClassInstance(y)) {
      return x.constructor === y.constructor;
    }

    return undefined;
  });
}

/**
 * Returns the previous reference while the new value is deeply equal to it.
 */
export function useDeepMemo<T>(value: T): T {
  const ref = useRef<T>(value);

  if (!isDeepEqual(ref.current, value)) {
    ref.current = value;
  }

  return ref.current;
}
