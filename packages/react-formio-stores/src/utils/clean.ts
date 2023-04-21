export function clean(obj: any = {}) {
  return Object.entries(obj).reduce((obj, [key, entry]) => {
    if (entry !== undefined) {
      return {
        ...obj,
        [key]: entry
      };
    }

    return obj;
  }, {});
}
