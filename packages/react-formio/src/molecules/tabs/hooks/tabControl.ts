import { type RefObject, useContext, useEffect } from "react";

import { TabControlContext } from "../context/TabControl";

export const useActiveTab = () => {
  const { value } = useContext(TabControlContext);

  return value;
};

export const useTabDispatch = () => {
  const { dispatch } = useContext(TabControlContext);

  return dispatch;
};

export const useTabsUid = () => {
  const { uid } = useContext(TabControlContext);

  return uid;
};

interface Props<T extends HTMLElement> {
  value: number;
  ref: RefObject<T>;
}

export function useRegisterTabControl<T extends HTMLElement>({ value, ref }: Props<T>) {
  const { dispatch, register, unregister } = useContext(TabControlContext);

  useEffect(() => {
    register(value, ref);

    return () => {
      unregister(value);
    };
  }, [value, ref, register, unregister]);

  return dispatch;
}

export const useTabControls = () => {
  const { refs } = useContext(TabControlContext);

  return refs;
};

export const useActiveTabControl = () => {
  const { value, refs } = useContext(TabControlContext);

  return [value, refs.get(value)] as const;
};
