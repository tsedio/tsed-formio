import camelCase from "lodash/camelCase";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";

import type { FormType } from "../../../interfaces";

export const hasChanged = (form: Partial<FormType>, value: Partial<FormType>): boolean => !isEqual(form, value);

export interface FormEditState {
  past: Partial<FormType>[];
  future: Partial<FormType>[];
  current: Partial<FormType>;
  original: Partial<FormType>;
}

export function createInitialState(props: any): FormEditState {
  return {
    past: [],
    future: [],
    current: cloneDeep(props.form),
    original: cloneDeep(props.form)
  };
}

export const reducer = (state: FormEditState, { type, value }: any): FormEditState => {
  const { past, current, future } = state;

  const update = (newValue: any): any => {
    if (newValue.title !== state.current.title && !state.current._id) {
      newValue.name = camelCase(value.title);
      newValue.path = camelCase(value.title).toLowerCase();
    }

    return {
      ...state,
      past: [...past, cloneDeep(current)],
      current: newValue
    };
  };

  switch (type) {
    case "undo":
      if (past.length) {
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);

        return {
          ...state,
          past: newPast,
          current: cloneDeep(previous),
          future: [cloneDeep(current), ...future]
        };
      }
      break;

    case "redo":
      if (future.length) {
        const next = future[0];
        const newFuture = future.slice(1);

        return {
          ...state,
          past: [...past, cloneDeep(current)],
          current: cloneDeep(next),
          future: newFuture
        };
      }
      break;

    case "reset":
      return update(cloneDeep(state.original));

    case "formChange":
      const newValue = { ...state.current, ...value };

      if (hasChanged(state.current, newValue)) {
        return update(newValue);
      }
      break;

    case "replaceForm":
      return {
        ...state,
        past: [],
        future: [],
        current: cloneDeep(value),
        original: cloneDeep(value)
      };

    default:
      break;
  }

  return state;
};
