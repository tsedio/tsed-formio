import { Formio, Utils } from "formiojs";

export function getFormUrl(formId: string): string {
  const url = [Formio.getProjectUrl()];

  if (Utils.isMongoId(formId)) {
    url.push("form");
  } else if (formId.includes("__")) {
    formId = formId.replace(/__/gi, "/");
  }

  url.push(formId);

  return url.join("/");
}

export function getActionUrl(formId: string, actionId?: string): string {
  return [getFormUrl(formId), "action", actionId].filter(Boolean).join("/");
}

export function getSubmissionUrl(formId: string, submissionId?: string): string {
  return [getFormUrl(formId), "submission", submissionId].filter(Boolean).join("/");
}
