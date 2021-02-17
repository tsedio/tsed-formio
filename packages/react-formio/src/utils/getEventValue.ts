export function getEventValue(event: any) {
  const { target } = event;
  return target.type === "checkbox" ? target.checked : target.value;
}
