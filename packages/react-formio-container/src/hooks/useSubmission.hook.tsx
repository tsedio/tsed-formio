import {
  deleteSubmission,
  getSubmission as getSubmissionAction,
  getSubmissions,
  oneOfIsActive,
  receiveForm,
  refreshSubmissions,
  saveSubmission as saveSubmissionAction,
  selectAuth,
  selectError,
  selectForm,
  selectIsActive,
  selectRoot,
  selectSubmission,
  Submission
} from "@tsed/react-formio-stores";
import { push } from "connected-react-router";
import noop from "lodash/noop";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UseSubmissionsProps } from "./useSubmissions.hook";

export interface UseSubmissionProps extends UseSubmissionsProps {
  submissionId?: string;
  submissionAction?: string;
}

export function useSubmission(props: UseSubmissionProps) {
  const { basePath, formType, formId, formAction, onError = noop, onSuccess = noop, onSubmitSubmission = noop } = props;

  let { submissionId, submissionAction } = props;

  if (submissionId === "create") {
    submissionAction = "create";
    submissionId = undefined;
  }

  const type = formType.replace(/s$/, "");
  const submissionType = formAction.replace(/s$/, "");
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const error = useSelector((state) => selectError(type, state));
  const form = useSelector((state) => selectForm(type, state));
  const submission = useSelector((state) => selectSubmission(submissionType, state as any));
  const isActive = useSelector(oneOfIsActive(submissionType, formType, type));

  useSelector((state) => selectIsActive(submissionType, state));

  const url = useSelector((state) => selectRoot(submissionAction === "edit" ? submissionType : type, state)?.url);

  const formioRef = useRef<any>();

  const getSubmission = () => {
    if (submissionAction !== "create" && submissionId) {
      dispatch(getSubmissionAction(submissionType, formId, submissionId));
    }
  };

  const onRemoveDone = (err: Error) => {
    if (!err) {
      dispatch(refreshSubmissions(formAction, formId));
      dispatch(push(basePath));
      onSuccess({
        name: `remove:${submissionType}`,
        title: `${submissionType} removed`,
        message: `The ${submissionType} has been successfully removed!`,
        data: submissionId
      });
    } else {
      onError({
        name: `remove:${submissionType}`,
        title: `${submissionType} failed`,
        message: err.message,
        error: err,
        data: submissionId
      });
    }
  };

  const removeSubmission = () => {
    submissionId && dispatch(deleteSubmission(submissionType, formId, submissionId, onRemoveDone));
  };

  const onSaveDone = async (err: Error | null, updatedSubmission: Submission) => {
    if (!err) {
      onSuccess({
        name: `${submissionAction}:${submissionType}`,
        title: `${submissionType} saved`,
        message: `The ${submissionType} has been successfully updated!`,
        data: updatedSubmission
      });
      dispatch(getSubmissions(formAction, formId));
      dispatch(push([basePath, updatedSubmission._id, submissionAction === "create" ? "edit" : formAction].join("/")));
      formioRef.current.loading = false;
    } else {
      onError({
        name: `remove:${submissionType}`,
        title: `${submissionType} failed`,
        message: err.message,
        error: err,
        data: submission
      });
    }
  };

  const saveSubmission = (submission: Submission) => {
    onSubmitSubmission(submissionType, formId, submission);
    dispatch(saveSubmissionAction(submissionType, formId, submission, onSaveDone));
  };

  const duplicateSubmission = () => {
    dispatch(receiveForm(formType, { ...submission, _id: undefined }));
    dispatch(push([basePath, "create"].join("/")));
    onSuccess({
      name: `duplicate:${submissionType}`,
      title: `${submissionType} duplicated`,
      message: `The ${submissionType} has been successfully duplicated!`,
      data: form
    });
  };

  useEffect(() => {
    getSubmission();
  }, [submissionAction]);

  return {
    ...props,
    isActive,
    submissionId,
    submissionAction,
    auth,
    error,
    form,
    submission,
    url,
    getSubmission,
    saveSubmission,
    removeSubmission,
    duplicateSubmission,
    onFormReady(formio: any) {
      formioRef.current = formio;
    },
    gotoEdit() {
      dispatch(push([basePath, submissionId, "edit"].join("/")));
    },
    gotoRemove() {
      dispatch(push([basePath, submissionId, "delete"].join("/")));
    }
  };
}
