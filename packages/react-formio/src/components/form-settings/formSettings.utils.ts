import type { Form as FormType } from "@formio/core";
import cloneDeep from "lodash/cloneDeep";

import { Submission } from "../../interfaces";

export type FormSettingsSchema = {
  action: string;
  tags: string[];
  properties: Record<string, any>;
};

export function formSettingsToSubmission(form: Partial<FormType>): Submission<FormSettingsSchema> {
  return {
    data: {
      action: form.action!,
      tags: form.tags!,
      properties: form.properties!
    }
  };
}

export function submissionToFormSettings(form: Partial<FormType>, submission: Submission<FormSettingsSchema>): Partial<FormType> {
  return {
    ...cloneDeep(form),
    tags: submission.data.tags,
    action: submission.data.action,
    properties: submission.data.properties
  };
}
