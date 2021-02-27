export interface ReducerEvent<Payload = any> {
  type: string;
  name: string;
  payload?: Payload;
}

export interface ReduceFunction<State = any, Payload = any> {
  (state: State, event: ReducerEvent<Payload>): State;

  $emit(
    type: string | { toString(): string },
    state: State,
    payload: Payload
  ): State;

  toString(): string;
}

export type InitialStateCreator<State = any> = (
  state?: Partial<State> | any
) => State;

export type Reducer<State = any, Payload = any> = (
  state: State,
  payload: Payload,
  reset: InitialStateCreator<State>
) => State;

export type Reducers<State = any, Payload = any> = Record<
  string,
  Reducer<State, Payload>
>;

export interface On<State = any, Payload = any> {
  (name: string | { toString(): string }, reducer: Reducer<State, Payload>): On<
    State,
    Payload
  >;
}

export interface ReducersCreator<State = any, Payload = any> {
  (on: On<State, Payload>): void;
}

export interface SandboxReducers<State = any, Payload = any> {
  (
    reducerName: string | { toString(): string },
    defaultStateOptions?: Partial<State>
  ): ReduceFunction<State, Payload>;

  on(
    name: string | { toString(): string },
    reducer: Reducer<State, Payload>
  ): SandboxReducers<State, Payload>;
}
/**
 * Create a new Reducer
 * @param createInitialState
 * @param reducers
 */
export function createReducer<State = any, Payload = any>(
  reducers: Reducers<State, Payload> | ReducersCreator,
  createInitialState: InitialStateCreator
): SandboxReducers {
  if (typeof reducers === "function") {
    const localReducers: Reducers<State, Payload> = {};

    const on: On<State, Payload> = (name, reducer) => {
      localReducers[String(name)] = reducer;
      return on;
    };

    reducers(on);

    return createReducer<State, Payload>(localReducers, createInitialState);
  }

  const sandboxReducers = (
    reducerName: string | { toString(): string },
    defaultStateOptions?: any
  ): ReduceFunction<State, Payload> => {
    const name = String(reducerName);
    const initialState: State & { name: string } = {
      name,
      ...createInitialState(defaultStateOptions)
    };

    const reduce = (
      state: State = initialState,
      event: ReducerEvent
    ): State => {
      const { type, name: actionName, payload } = event;

      if (actionName !== name) {
        return state;
      }

      if (reducers[type]) {
        return reduce.$emit(type, state, payload);
      }

      if (reducers.default) {
        return reduce.$emit("default", state, payload);
      }

      return state;
    };

    reduce.$emit = (type: string, state: State, payload: any): State => {
      return {
        ...reducers[type](state, payload, () =>
          createInitialState(defaultStateOptions)
        ),
        name
      };
    };

    reduce.toString = (): string => name;

    return reduce as any;
  };

  sandboxReducers.on = (
    name: string | { toString(): string },
    reducer: Reducer<State, Payload>
  ): SandboxReducers => {
    reducers[String(name)] = reducer;

    return sandboxReducers;
  };

  return sandboxReducers;
}
