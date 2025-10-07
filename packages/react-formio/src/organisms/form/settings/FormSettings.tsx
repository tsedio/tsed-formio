import isEqual from "lodash/isEqual";
import noop from "lodash/noop";
import { useEffect, useState } from "react";

import { useI18n } from "../../../hooks/useI18n.js";
import type { ChangedSubmission, FormOptions, FormType } from "../../../interfaces";
import { Form } from "../../form/Form";
import { getFormSettingsSchema } from "./FormSettings.schema";
import { formSettingsToSubmission, FormSettingsType, submissionToFormSettings } from "./FormSettings.utils";

export interface FormSettingsProps {
  form: Partial<FormType>;
  onSubmit?: Function;
  options?: FormOptions;
}

function useFormSettings({ form: formDefinition, onSubmit = noop }: FormSettingsProps) {
  const form = getFormSettingsSchema();
  const [isValid, setIsValid] = useState(true);
  const [submission, setSubmission] = useState(() => formSettingsToSubmission(formDefinition));

  const onChange = ({ data, isValid }: ChangedSubmission<FormSettingsType>) => {
    if (isValid) {
      setSubmission({ data });
    }
    setIsValid(isValid);
  };

  useEffect(() => {
    const input = formSettingsToSubmission(formDefinition);
    if (formDefinition?._id && !isEqual(submission.data, input.data)) {
      setSubmission(input);
    }
  }, [formDefinition?._id]);

  return {
    form,
    type: formDefinition.type,
    submission,
    onChange,
    isValid,
    setIsValid,
    onSubmit: () => {
      onSubmit(submissionToFormSettings(formDefinition, submission));
    }
  };
}

export function FormSettings(props: FormSettingsProps) {
  const { form, submission, onChange, onSubmit, isValid } = useFormSettings(props);

  const { t } = useI18n(props?.options?.i18n);

  return (
    <div>
      <Form<FormSettingsType> form={form} submission={submission} onChange={onChange} options={props.options} />

      <button data-testid='submit' disabled={!isValid} className={"mt-5 btn btn-primary"} onClick={onSubmit} type={"submit"}>
        {t("Save settings")}
      </button>
    </div>
  );
}
