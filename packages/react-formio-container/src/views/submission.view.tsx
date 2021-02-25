import { Form } from "@tsed/react-formio";
import React from "react";
import { useParams } from "react-router";
import { UseFormProps } from "../hooks/useForm.hook";
import { useSubmission } from "../hooks/useSubmission.hook";
import { RemoveModal } from "@tsed/react-formio/dist/src/components/modal/removeModal";

export interface SubmissionViewProps extends UseFormProps {
  formAction: string;
}

export function SubmissionView(props: SubmissionViewProps) {
  const params = useParams<{
    submissionId: string;
    submissionActions?: string;
  }>();

  const {
    formAction,
    submissionAction,
    form,
    submission,
    goEdit,
    removeSubmission,
    saveSubmission,
    onFormReady,
    url
  } = useSubmission({
    ...props,
    ...params
  });

  return (
    <div className={"p-4"}>
      <h2 className={"border-b-1 border-gray-300 text-xl mb-4"}>
        {submissionAction} data
      </h2>
      <Form
        form={form}
        submission={submission as any}
        onSubmit={saveSubmission}
        onFormReady={onFormReady}
        url={url}
        options={{}}
      />
      {submissionAction === "delete" && (
        <RemoveModal
          show={true}
          valueToCompare={form.name}
          itemType={formAction}
          onSubmit={removeSubmission}
          onClose={goEdit}
        />
      )}
    </div>
  );
}
