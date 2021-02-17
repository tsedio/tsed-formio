import { Formio } from "formiojs";

export const isMongoId = (text: string | any): boolean => {
  return text.toString().match(/^[0-9a-fA-F]{24}$/);
};

export function getFormUrl(formId: string): string {
  const url = [Formio.getProjectUrl()];

  if (isMongoId(formId)) {
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

export function getSubmissionUrl(
  formId: string,
  submissionId?: string
): string {
  return [getFormUrl(formId), "submission", submissionId]
    .filter(Boolean)
    .join("/");
}
