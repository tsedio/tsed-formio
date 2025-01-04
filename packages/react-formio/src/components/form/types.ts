import { ComponentType, JSON, SubmissionType } from "../../interfaces";

export interface FormPageChangeProps<Data extends { [key: string]: JSON } = { [key: string]: JSON }> {
  page: number;
  submission: SubmissionType<Data>;
}

export type FormCustomEvent = { type: string; event: string; component: ComponentType; data: any };
