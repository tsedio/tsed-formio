export function getEventValue(event: any) {
  const { target } = event;

  if (event.target.multiple && event.target.selectedOptions) {
    return Array.from(
      event.target.selectedOptions,
      (option: any) => option.value
    );
  }

  return target.type === "checkbox" ? target.checked : target.value;
}
