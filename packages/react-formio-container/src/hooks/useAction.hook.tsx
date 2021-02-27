import {
  ActionInfoSchema,
  ActionSchema,
  deleteAction,
  getAction,
  getActionInfo,
  getActions,
  saveAction as saveAct,
  selectAction,
  selectActionInfo,
  selectAuth,
  selectError,
  selectForm,
  Utils
} from "@tsed/react-formio";
import { push } from "connected-react-router";
import noop from "lodash/noop";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseActionsProps } from "./useActions.hook";

export interface UseActionProps extends UseActionsProps {
  actionId: string;
  actionAction: string;
}

export function useAction(props: UseActionProps) {
  const {
    basePath,
    formType,
    actionId,
    actionAction,
    formId,
    onSuccess = noop,
    onError = noop
  } = props;

  const type = formType.replace(/s$/, "");
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const form = useSelector((state) => selectForm(type, state));
  const error = useSelector((state) => selectError("action", state));
  const action = useSelector(selectAction);
  const actionInfo: ActionInfoSchema | undefined = useSelector(
    selectActionInfo
  ) as any;

  const fetch = useCallback(() => {
    if (Utils.isMongoId(actionId)) {
      dispatch(getAction(formId, actionId));
    } else {
      dispatch(getActionInfo(formId, actionId));
    }
  }, [formId, actionId]);

  const onSaveDone = useCallback(
    (err: Error | null, actionInfo: ActionSchema) => {
      if (!err) {
        onSuccess({
          name: `${actionAction}:action`,
          title: `Action saved`,
          message: `The action has been successfully updated!`,
          data: actionInfo
        });
        dispatch(push([basePath, actionInfo._id, "edit"].join("/")));
        dispatch(getActions(formId));
      } else {
        onError({
          name: `remove:action`,
          title: `Save action failed`,
          message: err.message,
          error: err,
          data: actionInfo
        });
      }
    },
    [actionAction, formId]
  );

  const saveAction = useCallback(
    (actionInfo: ActionSchema) => {
      dispatch(saveAct(formId, actionInfo, onSaveDone));
    },
    [formId, onSaveDone]
  );

  const onRemoveDone = useCallback(
    (err: Error) => {
      if (!err) {
        dispatch(getActions(formId));
        dispatch(push(basePath));
        onSuccess({
          name: `remove:action`,
          title: `Action removed`,
          message: `The action has been successfully removed!`,
          data: actionId
        });
      } else {
        onError({
          name: `remove:action`,
          title: `Remove action failed`,
          message: err.message,
          error: err,
          data: actionId
        });
      }
    },
    [formId, formId, actionId]
  );

  const removeAction = useCallback(() => {
    dispatch(deleteAction(formId, actionId, onRemoveDone));
  }, [formId, actionId, onRemoveDone]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    ...props,
    auth,
    form,
    action,
    actionInfo,
    error,
    removeAction,
    getAction: fetch,
    saveAction,
    gotoEdit() {
      dispatch(push([basePath, actionId, "edit"].join("/")));
    },
    gotoRemove() {
      dispatch(push([basePath, actionId, "delete"].join("/")));
    }
  };
}
