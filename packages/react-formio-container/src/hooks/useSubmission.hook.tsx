import {
  deleteSubmission,
  getSubmission as getSubmissionAction,
  getSubmissions,
  refreshSubmissions,
  saveSubmission as saveSubmissionAction,
  selectAuth,
  selectError,
  selectForm,
  selectRoot,
  selectSubmission,
  Submission
} from "@tsed/react-formio";
import { push } from "connected-react-router";
import noop from "lodash/noop";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseSubmissionsProps } from "./useSubmissions.hook";

export interface UseSubmissionProps extends UseSubmissionsProps {
  submissionId?: string;
  submissionAction?: string;
}

export function useSubmission(props: UseSubmissionProps) {
  const {
    basePath,
    formType,
    formId,
    formAction,
    onError = noop,
    onSuccess = noop
  } = props;

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
  const submission = useSelector((state) =>
    selectSubmission(submissionType, state as any)
  );

  const url = useSelector(
    (state) =>
      selectRoot(submissionAction === "edit" ? submissionType : type, state)
        ?.url
  );

  const formioRef = useRef<any>();

  const getSubmission = useCallback(() => {
    if (submissionAction !== "create") {
      dispatch(getSubmissionAction(submissionType, formId, submissionId));
    }
  }, [form, submissionType, formId, submissionId]);

  const onRemoveDone = useCallback(
    (err: Error) => {
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
    },
    [basePath, formId, formAction, submissionId]
  );

  const removeSubmission = useCallback(() => {
    dispatch(
      deleteSubmission(submissionType, formId, submissionId, onRemoveDone)
    );
  }, [basePath, formId, submissionId, onRemoveDone]);

  const onSaveDone = useCallback(
    async (err: Error | null, updatedSubmission: Submission) => {
      if (!err) {
        onSuccess({
          name: `${submissionAction}:${submissionType}`,
          title: `${submissionType} saved`,
          message: `The ${submissionType} has been successfully updated!`,
          data: updatedSubmission
        });
        dispatch(getSubmissions(formAction, formId));
        dispatch(
          push(
            [
              basePath,
              updatedSubmission._id,
              submissionAction === "create" ? "edit" : formAction
            ].join("/")
          )
        );
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
    },
    [basePath, formId, formAction, submissionId]
  );

  const saveSubmission = useCallback(
    (submission: Submission) => {
      dispatch(
        saveSubmissionAction(submissionType, formId, submission, onSaveDone)
      );
    },
    [formId, onSaveDone]
  );

  useEffect(() => {
    getSubmission();
  }, [submissionAction]);

  return {
    ...props,
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
    onFormReady(formio: any) {
      formioRef.current = formio;
    },
    goEdit() {
      dispatch(push([basePath, submissionId, "edit"].join("/")));
    }
  };
}
