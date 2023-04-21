import { clearFormError, failForm, receiveForm, requestForm, resetForm } from "./form.actions";
import { formReducer } from "./form.reducers";

describe("Form reducer", () => {
  it("should return state (resetForm)", () => {
    const reducer = formReducer("name");
    const state: any = {};
    const payload = {};

    expect(reducer.$emit(resetForm, state, payload)).toEqual({
      name: "name",
      error: null,
      data: {},
      id: "",
      isActive: false,
      lastUpdated: 0,
      url: ""
    });
  });
  it("should return state (clearFormError)", () => {
    const reducer = formReducer("name");
    const state: any = {};
    const payload = {};

    expect(reducer.$emit(clearFormError, state, payload)).toEqual({
      name: "name",
      error: null
    });
  });
  it("should return state (requestForm)", () => {
    const reducer = formReducer("name");
    const state: any = {};
    const payload = {};

    expect(reducer.$emit(requestForm, state, payload)).toEqual({
      name: "name",
      error: null,
      data: {},
      isActive: true
    });
  });

  it("should return state (receiveForm)", () => {
    const reducer = formReducer("name");
    const state: any = {};
    const payload = {
      form: {
        _id: "id"
      },
      url: "url"
    };

    expect(reducer.$emit(receiveForm, state, payload)).toEqual({
      name: "name",
      error: null,
      data: {
        _id: "id"
      },
      id: "id",
      isActive: false,
      url: "url"
    });
  });

  it("should return state (failForm)", () => {
    const reducer: any = formReducer("name");
    const state = {};
    const payload = {
      error: new Error("message")
    };

    expect(reducer.$emit(failForm, state, payload)).toEqual({
      name: "name",
      error: payload.error,
      isActive: false
    });
  });
});
