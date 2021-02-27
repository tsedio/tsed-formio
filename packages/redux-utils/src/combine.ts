import { ReduceFunction } from "./createReducer";

export function combine(
  ...args: ReduceFunction[]
): Record<string, ReduceFunction> {
  return args.reduce((reducers: any, reduce: ReduceFunction) => {
    return {
      ...reducers,
      [reduce.toString()]: reduce
    };
  }, {});
}
