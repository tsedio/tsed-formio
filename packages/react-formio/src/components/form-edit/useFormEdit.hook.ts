import cloneDeep from "lodash/cloneDeep";
import { useEffect, useReducer } from "react";

import { FormSchema } from "../../interfaces/FormSchema";
import { createInitialState, hasChanged, reducer } from "./formEdit.reducer";

export interface UseFormEditHookProps extends Record<string, unknown> {
  form?: Partial<FormSchema>;
  typeChoices?: { label: string; value: any }[];
  displayChoices?: { label: string; value: any }[];
  enableTags?: boolean;
  onSubmit?: (form: Partial<FormSchema>) => void;
  onCopy?: (form: Partial<FormSchema>) => void;
}

export function useFormEdit(props: UseFormEditHookProps) {
  const [{ current, future, past }, dispatchFormAction] = useReducer(reducer, createInitialState(props));

  const onSubmit = () => {
    if (props.onSubmit && typeof props.onSubmit === "function") {
      props.onSubmit(current);
    }
  };
  const onCopy = () => {
    if (props.onSubmit && typeof props.onCopy === "function") {
      props.onCopy(current);
    }
  };

  useEffect(() => {
    if (props.form && (current._id !== props.form._id || current.modified !== props.form.modified)) {
      dispatchFormAction({ type: "replaceForm", value: props.form });
    }
  }, [props.form]);

  const formChange = (newForm: Partial<FormSchema>) => {
    if (hasChanged(current, { ...current, ...newForm })) {
      dispatchFormAction({ type: "formChange", value: newForm });
    }
  };

  const redo = () => dispatchFormAction({ type: "redo" });
  const undo = () => dispatchFormAction({ type: "undo" });
  const reset = () => dispatchFormAction({ type: "reset" });

  const setChange = (path: string, value: any) => {
    formChange({ ...current, [path]: value });
  };

  return {
    form: cloneDeep(current),
    redo,
    undo,
    reset,
    hasChanged: !!past.length,
    isValid: current.title && current.name && current.path,
    hasUndo: !!past.length,
    hasRedo: !!future.length,
    onSubmit,
    onCopy,
    formChange,
    setChange
  };
}
