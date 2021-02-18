import { useEffect, useReducer } from "react";
import { FormSchema } from "../../interfaces/FormSchema";
import { createInitialState, hasChanged, reducer } from "./formEdit.reducer";

export interface UseFormHookProps {
  form: Partial<FormSchema>;
  redo: Function;
  undo: Function;
  reset: Function;
  hasChanged: boolean;
  isValid: boolean;
  hasUndo: boolean;
  hasRedo: boolean;
  onSubmit: () => void;
  onCopy: () => void;
  formChange: (newForm: Partial<FormSchema>) => void;
  setChange: (path: string, value: any) => void;
}

export function useForm(props: any): UseFormHookProps {
  const [{ current, future, past }, dispatchFormAction] = useReducer(
    reducer,
    createInitialState(props)
  );

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
    if (
      props.form &&
      (current._id !== props.form._id ||
        current.modified !== props.form.modified)
    ) {
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
    form: current,
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
