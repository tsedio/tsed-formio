import { Form, iconClass, RemoveModal, useTooltip } from "@tsed/react-formio";
import classnames from "classnames";
import React from "react";
import { useParams } from "react-router";
import { UseFormProps } from "../hooks/useForm.hook";
import { useSubmission } from "../hooks/useSubmission.hook";
import { ucfirst } from "../utils/ucfirst";

export interface SubmissionViewProps extends UseFormProps {
  formAction: string;
}

export function SubmissionComponent(props: ReturnType<typeof useSubmission>) {
  const {
    formAction,
    submissionAction,
    form,
    submission,
    gotoEdit,
    gotoRemove,
    duplicateSubmission,
    removeSubmission,
    saveSubmission,
    onFormReady,
    url
  } = props;

  const copyRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: "Copy"
  });

  const removeRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: "Remove"
  });

  return (
    <div className={"p-4"}>
      <h2
        className={
          "border-b-1 border-gray-300 text-lg mb-4 pb-1 flex items-center"
        }
      >
        <div className={"flex items-center flex-1"}>
          {ucfirst(form.type)} {form.title}{" "}
          <i
            className={classnames(
              iconClass(undefined, "chevron-right"),
              "text-md text-secondary mx-1"
            )}
          />{" "}
          <span className={"text-gray-500"}>
            {ucfirst(submissionAction)} data
          </span>
        </div>
        <div>
          <button
            onClick={duplicateSubmission}
            className={classnames("btn btn-light btn-sm mr-2")}
            ref={copyRef}
          >
            <i className={iconClass(undefined, "copy")} />
          </button>

          <button
            onClick={gotoRemove}
            className={classnames("btn btn-danger btn-sm")}
            ref={removeRef}
          >
            <i className={iconClass(undefined, "trash")} />
          </button>
        </div>
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
          onClose={gotoEdit}
        />
      )}
    </div>
  );
}

export function SubmissionView(props: SubmissionViewProps) {
  const Component = props.SubmissionComponent || SubmissionComponent;
  const params = useParams<{
    submissionId: string;
    submissionActions?: string;
  }>();

  const submission = useSubmission({
    ...props,
    ...params
  });

  return <Component {...submission} />;
}
