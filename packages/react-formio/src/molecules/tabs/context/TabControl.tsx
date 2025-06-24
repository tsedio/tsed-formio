"use client";

import { createContext, type Dispatch, type PropsWithChildren, type RefObject, useCallback, useId, useReducer } from "react";

type RefTab<T extends HTMLElement = HTMLElement> = RefObject<T>;
type RefTabs<T extends HTMLElement = HTMLElement> = Map<number, RefTab<T>>;

type TabsUpdateAction = {
  type: "update";
  payload: number;
};

type TabsRegisterAction<T extends HTMLElement = HTMLElement> = {
  type: "register";
  payload: { value: number; ref: RefObject<T> };
};

type TabsUnregisterAction = {
  type: "unregister";
  payload: { value: number };
};

type TabsAction<T extends HTMLElement = HTMLElement> =
  | { type: "start" | "end" | "previous" | "next" }
  | TabsUpdateAction
  | TabsRegisterAction<T>
  | TabsUnregisterAction;

interface TabsState<T extends HTMLElement = HTMLElement> {
  uid: string;
  value: number;
  refs: RefTabs<T>;
}

interface TabControl<T extends HTMLElement = HTMLElement> extends TabsState<T> {
  uid: string;
  value: number;
  refs: RefTabs<T>;
  dispatch: Dispatch<TabsAction>;
  register: (value: number, ref: RefTab<T>) => void;
  unregister: (value: number) => void;
}

function next(state: TabsState) {
  const keys = [...state.refs.keys()];
  const index = keys.findIndex((value) => value === state.value);
  const nextIndex = (index + 1) % keys.length;

  return { ...state, value: keys[nextIndex] };
}

function previous(state: TabsState) {
  const keys = [...state.refs.keys()];
  const index = keys.findIndex((value) => value === state.value);
  const previousIndex = (index - 1 + keys.length) % keys.length;

  return { ...state, value: keys[previousIndex] };
}

function start(state: TabsState) {
  const keys = [...state.refs.keys()];
  const firstIndex = keys[0];

  return {
    ...state,
    value: firstIndex
  };
}

function end(state: TabsState) {
  const keys = [...state.refs.keys()];
  const lastIndex = keys[keys.length - 1];

  return {
    ...state,
    value: lastIndex
  };
}

function unregister(state: TabsState, action: TabsUnregisterAction) {
  const deletedRefs = new Map(state.refs);
  deletedRefs.delete(action.payload.value);

  return {
    ...state,
    refs: deletedRefs
  };
}

function register(state: TabsState, action: TabsRegisterAction) {
  return {
    ...state,
    refs: new Map(state.refs).set(action.payload.value, action.payload.ref)
  };
}

function update(state: TabsState, action: TabsUpdateAction) {
  return { ...state, value: action.payload };
}

const actions = {
  next,
  previous,
  start,
  end,
  register,
  unregister,
  update
};

function tabsReducer(state: TabsState, action: TabsAction): TabsState {
  if (action.type in actions) {
    const actionFunction = actions[action.type as keyof typeof actions] as (state: TabsState, action: TabsAction) => TabsState;

    return actionFunction(state, action);
  }

  return state;
}

export const TabControlContext = createContext<TabControl>({
  uid: "",
  value: 0,
  refs: new Map(),
  dispatch: () => {
    console.warn("Tab Controller Context dispatch used outside of Provider");
  },
  register: () => {
    console.warn("Tab Controller Context register used outside of Provider");
  },
  unregister: () => {
    console.warn("Tab Controller Context unregister used outside of Provider");
  }
});

TabControlContext.displayName = "TabControlContext";

export interface TabsProviderProps {
  selected?: number;
  /**
   * The selected tab value
   * @deprecated Min props as no effect on the Tabs component and will be removed in future versions
   */
  min?: number;

  /**
   * The selected tab value
   * @deprecated Max props as no effect on the Tabs component and will be removed in future versions
   */
  max?: number;
}

export function TabsProvider({ selected = 0, children }: PropsWithChildren<TabsProviderProps>) {
  const uid = useId();
  const [state, dispatch] = useReducer(tabsReducer, { uid, value: selected, refs: new Map() });

  const register = useCallback(<T extends HTMLElement>(value: number, ref: RefTab<T>) => {
    dispatch({ type: "register", payload: { value, ref } });
  }, []);

  const unregister = useCallback((value: number) => {
    dispatch({ type: "unregister", payload: { value } });
  }, []);

  return <TabControlContext.Provider value={{ ...state, dispatch, register, unregister }}>{children}</TabControlContext.Provider>;
}
