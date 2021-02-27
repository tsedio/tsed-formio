import {
  ActionInfoSchema,
  ActionSchema,
  Operation,
  selectActions,
  selectAuth,
  selectAvailableActions,
  selectError,
  selectForm
} from "@tsed/react-formio";
import { push } from "connected-react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFormProps } from "./useForm.hook";

export interface UseActionsProps extends UseFormProps {
  formAction: string;
}

export function useActions({
  basePath: path,
  formType,
  formId,
  formAction,
  operations
}: UseActionsProps) {
  const type = formType.replace(/s$/, "");
  const basePath = path.replace(":formType", formType);

  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const error = useSelector((state) => selectError(type, state));
  const form = useSelector((state) => selectForm(type, state));
  const actions = useSelector(selectActions);
  const availableActions = useSelector(selectAvailableActions).map((item) => {
    return {
      label: item.title,
      value: item.name,
      ...item
    };
  });

  const [operation, setOperation] = useState<Operation>();
  const [currentAction, setCurrentAction] = useState<ActionInfoSchema>(
    availableActions[0]
  );

  const addAction = (actionName: string) => {
    dispatch(push([basePath, actionName, "add"].join("/")));
  };

  const dispatchOperation = (
    actionInfo: ActionSchema,
    operation: Operation
  ) => {
    setOperation(operation);

    dispatch(
      push([basePath, (actionInfo as any)._id, operation.action].join("/"))
    );
  };

  return {
    basePath,
    formType,
    formId,
    formAction,
    auth,
    error,
    form,
    operations,
    operation,
    actions,
    availableActions,
    currentAction,
    setCurrentAction,
    addAction,
    dispatchOperation
  };
}
