export function callLast(fn: Function, time: number) {
  let last: any = null;

  return (...args: any[]) => {
    if (last) {
      clearTimeout(last);
      last = null;
    }

    last = setTimeout(() => fn(...args), time);
  };
}
