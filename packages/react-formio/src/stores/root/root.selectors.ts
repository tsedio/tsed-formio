export function selectRoot<State = any>(name: string, state: any): State {
  return state[name];
}

export const selectError = (name: string, state: any): null | Error =>
  selectRoot(name, state).error;

export const selectIsActive = (name: string, state: any): boolean =>
  selectRoot(name, state).isActive;
