import {
  FormSchema,
  FormsState,
  getForms,
  Operation,
  selectRoot
} from "@tsed/react-formio";
import { push } from "connected-react-router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormioViewOptions } from "../interfaces/FormioViewOptions";
import { useQuery } from "./useQuery.hook";

export interface UseFormsProps extends FormioViewOptions {
  formType: string;
}

export function useForms(props: UseFormsProps) {
  const { basePath, formType } = props;
  const dispatch = useDispatch();
  const fetch = useCallback(
    (options?: any) => {
      dispatch(getForms(formType, options));
    },
    [formType]
  );

  const { error, data, isActive, parameters } = useSelector((state) =>
    selectRoot<FormsState>(formType, state)
  );
  const setParameters = useQuery(fetch, parameters);
  const [operation, setOperation] = useState<Operation>();
  const [currentData, setCurrentData] = useState<FormSchema>();

  const dispatchOperation = (data: FormSchema, operation: Operation) => {
    setOperation(operation);
    setCurrentData(currentData);
    dispatch(
      push(
        [
          basePath.replace(":formType", formType),
          data._id,
          operation.action
        ].join("/")
      )
    );
  };

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    ...props,
    isActive,
    forms: data,
    data,
    parameters,
    setParameters,
    error,
    operation,
    currentData,
    dispatchOperation,
    getForms: fetch
  };
}
