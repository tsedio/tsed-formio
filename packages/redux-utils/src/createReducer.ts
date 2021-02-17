export interface ReduceFunction<State = any, Payload = any> {
  (type: string, state: State, payload: Payload): any;

  $emit(
    type: string | { toString(): string },
    state: State,
    payload: Payload
  ): State;

  toString(): string;
}

export interface ReducerEvent {
  type: string;
  name: string;
  payload: any;
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

/**
 * Create a new Reducer
 * @param createInitialState
 * @param reducers
 */
export function createReducer<State = any, Payload = any>(
  reducers: Reducers<State, Payload>,
  createInitialState: InitialStateCreator
) {
  return (name: string, defaultStateOptions?: any): ReduceFunction<State> => {
    const initialState: State & { name: string } = {
      name,
      ...createInitialState(defaultStateOptions)
    };

    const reduce = (
      state: State = initialState,
      { type, name: actionName, payload }: ReducerEvent
    ): State => {
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
}

export function combine(
  ...args: ReduceFunction[]
): Record<string, ReduceFunction> {
  return args.reduce((reducers: any, reduce: ReduceFunction) => {
    return {
      ...reducers,
      [reduce.toString()]: reduce
    };
  }, {});
}
