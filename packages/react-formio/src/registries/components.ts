export const components = new Map<string, unknown>();

export function registerComponent(type: string, component: unknown) {
  components.set(type, component);
}

export function getComponent<Cmp>(type: string | string[]): Cmp {
  if (Array.isArray(type)) {
    for (const t of type) {
      if (components.has(t)) {
        return components.get(t) as unknown as Cmp;
      }
    }
  }

  const result = components.get(type as string) as unknown as Cmp;

  if (!result) {
    console.warn(`Missing component for ${type}`);
  }

  return result;
}
