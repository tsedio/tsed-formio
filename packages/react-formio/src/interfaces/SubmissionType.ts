import type { Component, Submission } from "@formio/core";

import type { JSONRecord } from "./JSONRecord.js";

export type SubmissionType<Data extends JSONRecord = JSONRecord> = Omit<Partial<Submission>, "data"> & {
  data: Data;
};

export interface ChangedSubmission<Data extends JSONRecord = JSONRecord> extends SubmissionType<Data> {
  data: Data;
  changed?: {
    component: Component;
    instance: any;
    value: unknown;
  } & Record<string, JSON>;
  isValid: boolean;
}
