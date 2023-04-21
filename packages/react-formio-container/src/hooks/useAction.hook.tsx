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
  Submission,
  Utils
} from "@tsed/react-formio-stores";
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
  const { basePath, formType, actionId, actionAction, onSuccess = noop, onError = noop } = props;

  const type = formType.replace(/s$/, "");
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const form = useSelector((state) => selectForm(type, state));
  const error = useSelector((state) => selectError("action", state));
  const action = useSelector(selectAction);
  const actionInfo: ActionInfoSchema | undefined = useSelector(selectActionInfo) as any;

  const fetch = useCallback(() => {
    if (form?._id) {
      if (Utils.isMongoId(actionId)) {
        dispatch(getAction(form?._id, actionId));
      } else {
        dispatch(getActionInfo(form?._id, actionId));
      }
    }
  }, [form?._id, actionId]);

  const onSaveDone = (err: Error | null, actionInfo: ActionSchema) => {
    if (!err) {
      onSuccess({
        name: `${actionAction}:action`,
        title: `Action saved`,
        message: `The action has been successfully updated!`,
        data: actionInfo
      });
      dispatch(push([basePath, actionInfo._id, "edit"].join("/")));
      dispatch(getActions(form?._id!));
    } else {
      onError({
        name: `remove:action`,
        title: `Save action failed`,
        message: err.message,
        error: err,
        data: actionInfo
      });
    }
  };

  const saveAction = (actionInfo: Submission<ActionSchema>) => {
    dispatch(saveAct(form?._id!, actionInfo, onSaveDone));
  };

  const onRemoveDone = (err: Error) => {
    if (!err) {
      dispatch(getActions(form?._id!));
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
        data: form?._id
      });
    }
  };

  const removeAction = () => {
    dispatch(deleteAction(form?._id!, actionId, onRemoveDone));
  };

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
