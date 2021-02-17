import {
  clearActionError,
  failAction,
  receiveAction,
  requestAction,
  resetAction,
  sendAction
} from "./action.actions";
import { actionReducer } from "./action.reducers";

describe("Action reducer", () => {
  it("should return state (resetAction)", () => {
    const reducer = actionReducer("name");
    const state = {};
    const payload = {};

    expect(reducer.$emit(resetAction.toString(), state, payload)).toEqual({
      name: "name",
      data: {},
      error: null,
      isActive: false
    });
  });

  it("should return state (clearActionError)", () => {
    const reducer = actionReducer("name");
    const state = {};
    const payload = {};

    expect(reducer.$emit(clearActionError.toString(), state, payload)).toEqual({
      name: "name",
      error: null
    });
  });

  it("should return state (requestAction)", () => {
    const reducer = actionReducer("name");
    const state = {};
    const payload = {};

    expect(reducer.$emit(requestAction.toString(), state, payload)).toEqual({
      name: "name",
      data: {},
      error: null,
      isActive: true
    });
  });

  it("should return state (sendAction)", () => {
    const reducer = actionReducer("name");
    const state = {};
    const payload = {
      action: {
        _id: "id"
      }
    };

    expect(reducer.$emit(sendAction.toString(), state, payload)).toEqual({
      name: "name",
      data: {
        _id: "id"
      },
      error: null,
      isActive: true
    });
  });

  it("should return state (receiveAction)", () => {
    const reducer = actionReducer("name");
    const state = {};
    const payload = {
      action: { _id: "id" }
    };

    expect(reducer.$emit(receiveAction.toString(), state, payload)).toEqual({
      name: "name",
      error: null,
      data: { _id: "id" },
      isActive: false
    });
  });

  it("should return state (failAction)", () => {
    const reducer = actionReducer("name");
    const state = {};
    const payload = {
      error: new Error("message")
    };

    expect(reducer.$emit(failAction.toString(), state, payload)).toEqual({
      name: "name",
      data: {},
      error: payload.error,
      isActive: false
    });
  });
});
