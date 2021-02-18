export const stopPropagationWrapper = (fn: Function) => (event: any) => {
  event.stopPropagation();
  fn();
};
