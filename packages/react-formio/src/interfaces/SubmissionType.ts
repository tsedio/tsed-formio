import type { Component, Submission } from "@formio/core";

export type JSON = unknown | string | number | boolean | null | undefined | JSON[] | { [key: string]: JSON };

export type SubmissionType<Data extends { [key: string]: JSON } = { [key: string]: JSON }> = Omit<Partial<Submission>, "data"> & {
  data: Data;
};

export interface ChangedSubmission<
  Data extends { [key: string]: JSON } = {
    [key: string]: JSON;
  }
> extends SubmissionType<Data> {
  data: Data;
  changed?: {
    component: Component;
    instance: any;
    value: unknown;
  } & Record<string, JSON>;
  isValid: boolean;
}
