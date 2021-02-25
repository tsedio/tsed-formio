import {
  getSubmissions,
  Operation,
  selectAuth,
  selectForm,
  selectRoot,
  Submission,
  SubmissionsState
} from "@tsed/react-formio";
import { push } from "connected-react-router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFormProps } from "./useForm.hook";
import { useQuery } from "./useQuery.hook";

export interface UseSubmissionsProps extends UseFormProps {
  formAction: string;
}

export function useSubmissions(props: UseSubmissionsProps) {
  const { basePath, formType, formId, formAction } = props;
  const type = formType.replace(/s$/, "");
  const dispatch = useDispatch();

  const fetch = useCallback(
    (options?: any) => {
      dispatch(getSubmissions(formAction, formId, options));
    },
    [formAction, formId]
  );

  const auth = useSelector(selectAuth);
  const form = useSelector((state) => selectForm(type, state));
  const { error, isActive, parameters, data } = useSelector(
    selectRoot<SubmissionsState>(formAction)
  );

  const setParameters = useQuery(fetch, parameters);
  const [operation, setOperation] = useState<Operation>();
  const [currentData, setCurrentData] = useState<Submission>();

  const dispatchOperation = (data: Submission, operation: Operation) => {
    setOperation(operation);
    setCurrentData(currentData);
    dispatch(push([basePath, data._id, operation.action].join("/")));
  };

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    ...props,
    auth,
    submissionId: currentData?._id,
    isActive,
    error,
    form,
    data,
    submissions: data,
    parameters,
    setParameters,
    operation,
    currentData,
    dispatchOperation,
    getSubmissions: fetch
  };
}
