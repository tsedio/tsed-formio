import { createAction } from "./createAction";
import { createReducer } from "./createReducer";

describe("createReducer()", () => {
  it("should create reducer and return a modified state if the name match", () => {
    const currentState = {};
    const action = createAction();
    const reducer = createReducer(
      {
        [action](state, payload) {
          return {
            ...state,
            data: payload.data
          };
        }
      },
      () => ({ test: "test" })
    );

    const sandboxReducer = reducer("sandbox", { config: "config" });
    const state = sandboxReducer(currentState, action("sandbox", { data: [] }));

    expect(state).toEqual({
      name: "sandbox",
      data: []
    });
  });
  it("should create reducer and return the state without change", () => {
    const action = createAction();
    const reducer = createReducer(
      {
        [action](state, payload) {
          return {
            ...state,
            data: payload.data
          };
        }
      },
      (options) => ({ test: "test", options })
    );

    const sandboxReducer = reducer("sandbox", { config: "config" });
    const state = sandboxReducer(undefined, action("error", { data: [] }));

    expect(state).toEqual({
      name: "sandbox",
      test: "test",
      options: {
        config: "config"
      }
    });
  });
  it("should call the default reducer", () => {
    const action = createAction();
    const reducer = createReducer(
      {
        [action](state, payload) {
          return {
            ...state,
            data: payload.data
          };
        },
        default(state) {
          return {
            ...state,
            defaultValue: "value"
          };
        }
      },
      (options) => ({ test: "test", options })
    );

    const sandboxReducer = reducer("sandbox", { config: "config" });
    const state = sandboxReducer(undefined, {
      name: "sandbox",
      payload: { data: [] }
    });

    expect(state).toEqual({
      name: "sandbox",
      test: "test",
      options: {
        config: "config"
      },
      defaultValue: "value"
    });
  });
});
