import {
  Form,
  iconClass,
  RemoveModal,
  useTooltip,
  Loader
} from "@tsed/react-formio";
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
    isActive,
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
    url,
    i18n
  } = props;

  const RemoveModalComponent = props.RemoveModalComponent || RemoveModal;
  const LoaderComponent = props.LoaderComponent || Loader;

  const copyRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: i18n("Copy")
  });

  const removeRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: i18n("Remove")
  });

  return (
    <div className={"p-4 relative"}>
      <LoaderComponent isActive={isActive} />
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
            {ucfirst(submissionAction)} {i18n("data")}
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
        options={{ i18n }}
      />
      {submissionAction === "delete" && (
        <RemoveModalComponent
          i18n={i18n}
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
