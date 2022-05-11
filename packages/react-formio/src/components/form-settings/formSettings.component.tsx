import { useCallback, useEffect, useState } from "react";
import { FormOptions, FormSchema } from "../../interfaces";
import { getFormSettingsSchema } from "./formSettings.schema";
import { Form } from "../form/form.component";
import {
  FormSettingsSchema,
  formSettingsToSubmission,
  submissionToFormSettings
} from "./formSettings.utils";
import isEqual from "lodash/isEqual";
import noop from "lodash/noop";
import { ChangedSubmission } from "../form/useForm.hook";

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
  const [isValid, setIsValid] = useState(true);
  const [submission, setSubmission] = useState(() =>
    formSettingsToSubmission(formDefinition)
  );

  const onChange = useCallback(
    ({ data, isValid }: ChangedSubmission<FormSettingsSchema>) => {
      if (isValid) {
        setSubmission({ data });
      }
      setIsValid(isValid);
    },
    [submission]
  );

  useEffect(() => {
    const input = formSettingsToSubmission(formDefinition);
    if (formDefinition?._id && !isEqual(submission.data, input.data)) {
      setSubmission(input);
    }
  }, [formDefinition?._id]);

  return {
    options,
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
  const {
    form,
    submission,
    options = {},
    onChange,
    onSubmit,
    isValid
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
        disabled={!isValid}
        className={"mt-5 btn btn-primary"}
        onClick={onSubmit}
        type={"submit"}
      >
        {i18n("Save settings")}
      </button>
    </div>
  );
}
