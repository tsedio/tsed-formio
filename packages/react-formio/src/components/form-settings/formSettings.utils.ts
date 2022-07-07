import cloneDeep from "lodash/cloneDeep";
import { FormSchema, Submission } from "../../interfaces";

export type FormSettingsSchema = {
  action: string;
  tags: string[];
  properties: Record<string, any>;
};

export function formSettingsToSubmission(form: Partial<FormSchema>): Submission<FormSettingsSchema> {
  return {
    data: {
      action: form.action!,
      tags: form.tags!,
      properties: form.properties!
    }
  };
}

export function submissionToFormSettings(form: Partial<FormSchema>, submission: Submission<FormSettingsSchema>): Partial<FormSchema> {
  return {
    ...cloneDeep(form),
    tags: submission.data.tags,
    action: submission.data.action,
    properties: submission.data.properties
  };
}
