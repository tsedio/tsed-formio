import { failActionInfo, receiveActionInfo, requestActionInfo, resetActionInfo } from "./action-info.actions";
import { ACTION_INFO } from "./action-info.constant";
import { actionInfoReducer } from "./action-info.reducers";

describe("ActionInfo reducers", () => {
  it("should return state (resetActionInfo)", () => {
    const reducer = actionInfoReducer;
    const state: any = {};
    const payload = {};

    expect(reducer.$emit(resetActionInfo, state, payload)).toEqual({
      name: ACTION_INFO,
      data: {},
      error: null,
      isActive: false
    });
  });
  it("should return state (requestActionInfo)", () => {
    const reducer = actionInfoReducer;
    const state: any = {};
    const payload = {};

    expect(reducer.$emit(requestActionInfo, state, payload)).toEqual({
      name: ACTION_INFO,
      data: {},
      error: null,
      isActive: true
    });
  });

  it("should return state (receiveActionInfo)", () => {
    const reducer = actionInfoReducer;
    const state: any = {};
    const payload = {
      actionInfo: { _id: "id" }
    };

    expect(reducer.$emit(receiveActionInfo, state, payload)).toEqual({
      name: ACTION_INFO,
      error: null,
      data: { _id: "id" },
      isActive: false
    });
  });

  it("should return state (failActionInfo)", () => {
    const reducer = actionInfoReducer;
    const state: any = {};
    const payload = {
      error: new Error("message")
    };

    expect(reducer.$emit(failActionInfo, state, payload)).toEqual({
      name: ACTION_INFO,
      data: {},
      error: payload.error,
      isActive: false
    });
  });
});
