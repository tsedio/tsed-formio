import type { ComponentType } from "./ComponentType";

export type JSON = unknown | string | number | boolean | null | undefined | JSON[] | { [key: string]: JSON };

export interface SubmissionType<Data extends { [key: string]: JSON } = { [key: string]: JSON }> extends Record<string, JSON> {
  _id?: string;
  data: Data;
  metadata?: { [key: string]: JSON };
  state?: string;
}

export interface ChangedSubmission<Data extends { [key: string]: JSON } = { [key: string]: JSON }> extends SubmissionType<Data> {
  data: Data;
  changed?: {
    component: ComponentType;
    instance: any;
    value: unknown;
  } & Record<string, JSON>;
  isValid: boolean;
}
