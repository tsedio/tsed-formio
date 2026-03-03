import { ComponentType, type JSONRecord, SubmissionType } from "../../interfaces";

export interface FormPageChangeProps<Data extends JSONRecord = JSONRecord> {
  page: number;
  submission: SubmissionType<Data>;
}

export type FormCustomEvent = { type: string; event: string; component: ComponentType; data: any };
