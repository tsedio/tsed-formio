import React, { useCallback, useState } from "react";
import { FormOptions, FormSchema, Submission } from "../../interfaces";
import { getFormSettingsSchema } from "./formSettings.schema";
import { Form } from "../form/form.component";
import {
  formSettingsToSubmission,
  FormSettingsSchema,
  submissionToFormSettings
} from "./formSettings.utils";
import isEqual from "lodash/isEqual";
import noop from "lodash/noop";

export interface FormSettingsProps {
  form: Partial<FormSchema>;
  onSubmit?: Function;
  options?: FormOptions;
}

function useFormSettings({
  form: formDefinition,
  onSubmit = noop,
  options
}: FormSettingsProps) {
  const form = getFormSettingsSchema();
  const [submission, setSubmission] = useState(() =>
    formSettingsToSubmission(formDefinition)
  );

  const onChange = useCallback(
    (newSubmission: Submission<FormSettingsSchema>) => {
      if (!isEqual(submission.data, newSubmission.data)) {
        setSubmission(newSubmission);
      }
    },
    [submission]
  );

  return {
    options,
    form,
    type: formDefinition.type,
    submission,
    onChange,
    onSubmit: () => {
      onSubmit(submissionToFormSettings(formDefinition, submission));
    }
  };
}

export function FormSettings(props: FormSettingsProps) {
  const {
    form,
    submission,
    options = {},
    onChange,
    onSubmit
  } = useFormSettings(props);

  const i18n = options.i18n || ((f: string) => f);

  return (
    <div>
      <Form
        form={form}
        submission={submission}
        onChange={onChange}
        options={options}
      />

      <button
        data-testid='submit'
        className={"mt-5 btn btn-primary"}
        onClick={onSubmit}
      >
        {i18n("Save settings")}
      </button>
    </div>
  );
}
