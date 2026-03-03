export type JSON = unknown | string | number | boolean | null | undefined | JSON[] | { [key: string]: JSON };
export type JSONRecord = Record<string, JSON>;
