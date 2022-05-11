import get from "lodash/get";

export function selectRoot<State = Record<string, any>>(name: string): (state: Record<string, any>) => State;
export function selectRoot<State = Record<string, any>>(name: string, state: Record<string, any>): State;
export function selectRoot<State = Record<string, any>>(name: string, state?: Record<string, any>): any {
  if (state) {
    return state[name];
  }

  return (state: Record<string, any>) => selectRoot(name, state);
}

export const selectError = (name: string, state: Record<string, any>): null | Error => get(selectRoot(name, state), "error");

export const selectIsActive = (name: string, state: Record<string, any>): boolean => get(selectRoot(name, state), "isActive");

export function oneOfIsActive(...names: string[]) {
  return (state: any) => {
    return !!names.find((name) => {
      return get(state, `${name}.isActive`, get(state, `${name}.current.isActive`));
    });
  };
}
