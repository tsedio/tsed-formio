import {
  failForms,
  receiveForms,
  requestForms,
  resetForms
} from "./forms.actions";
import { formsReducer } from "./forms.reducers";

describe("Forms reducer", () => {
  it("should return state (resetForms)", () => {
    const reducer = formsReducer("name");
    const state: any = {};
    const payload = {};

    expect(reducer.$emit(resetForms.toString(), state, payload)).toEqual({
      name: "name",
      error: null,
      data: [],
      isActive: false,
      parameters: {
        filters: [],
        pageCount: 0,
        pageIndex: 0,
        pageSize: 10,
        query: {},
        select: "",
        sortBy: []
      }
    });
  });
  it("should return state (requestForms)", () => {
    const reducer = formsReducer("name");
    const state: any = {};
    const payload: any = {
      parameters: {
        pageSize: 10,
        pageIndex: 1,
        sortBy: [],
        filters: [],
        filterId: "id",
        select: "select"
      }
    };

    expect(reducer.$emit(requestForms.toString(), state, payload)).toEqual({
      name: "name",
      error: null,
      parameters: {
        filterId: "id",
        filters: [],
        pageIndex: 1,
        pageSize: 10,
        select: "select",
        sortBy: []
      },
      data: [],
      isActive: true
    });
  });
  it("should return state (receiveForms)", () => {
    const reducer = formsReducer("name");
    const state: any = {
      parameters: {
        pageSize: 10
      }
    };
    const payload: any = {
      forms: [{ _id: "id" }],
      url: "url",
      success: "success"
    };
    payload.forms.serverCount = 100;

    expect(reducer.$emit(receiveForms.toString(), state, payload)).toEqual({
      name: "name",
      data: [
        {
          _id: "id"
        }
      ],
      isActive: false,
      parameters: {
        pageCount: 10,
        pageSize: 10,
        totalLength: 100
      }
    });
  });
  it("should return state (failForms)", () => {
    const reducer = formsReducer("name");
    const state: any = {};
    const payload = {
      error: new Error("message")
    };

    expect(reducer.$emit(failForms.toString(), state, payload)).toEqual({
      name: "name",
      error: payload.error,
      isActive: false
    });
  });
});
