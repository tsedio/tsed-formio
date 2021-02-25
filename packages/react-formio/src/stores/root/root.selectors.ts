import get from "lodash/get";

export function selectRoot<State = any>(name: string): (state: any) => State;
export function selectRoot<State = any>(name: string, state: any): State;
export function selectRoot<State = any>(name: string, state?: any): any {
  if (state) {
    return state[name];
  }

  return (state: any) => selectRoot(name, state);
}

export const selectError = (name: string, state: any): null | Error =>
  get(selectRoot(name, state), "error");

export const selectIsActive = (name: string, state: any): boolean =>
  get(selectRoot(name, state), "isActive");
