import cloneDeep from "lodash/cloneDeep";

import { FormType, SubmissionType } from "../../../interfaces";

export type FormSettingsType = {
  action: string;
  tags: string[];
  properties: Record<string, any>;
};

export function formSettingsToSubmission(form: Partial<FormType>): SubmissionType<FormSettingsType> {
  return {
    data: {
      action: form.action!,
      tags: form.tags!,
      properties: form.properties!
    }
  };
}

export function submissionToFormSettings(form: Partial<FormType>, submission: SubmissionType<FormSettingsType>): Partial<FormType> {
  return {
    ...cloneDeep(form),
    tags: submission.data.tags,
    action: submission.data.action,
    properties: submission.data.properties
  };
}
