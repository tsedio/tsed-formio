import { failSubmissions, receiveSubmissions, requestSubmissions, resetSubmissions } from "./submissions.actions";
import { submissionsReducer } from "./submissions.reducers";

describe("Submissions reducers", () => {
  it("should return state (resetSubmissions)", () => {
    const reducer = submissionsReducer("name");
    const state: any = {};
    const payload = {};

    expect(reducer.$emit(resetSubmissions.toString(), state, payload)).toEqual({
      error: null,
      data: [],
      name: "name",
      isActive: false,
      formId: "",
      parameters: {
        pageCount: 0,
        pageIndex: 0,
        pageSize: 10,
        query: {},
        select: "",
        sortBy: []
      }
    });
  });
  it("should return state (requestSubmissions)", () => {
    const reducer = submissionsReducer("name");
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

    expect(reducer.$emit(requestSubmissions.toString(), state, payload)).toEqual({
      error: null,
      formId: undefined,
      name: "name",
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
  it("should return state (receiveSubmissions)", () => {
    const reducer = submissionsReducer("name");
    const state: any = {
      parameters: {
        pageSize: 10
      }
    };
    const payload = {
      submissions: [{ _id: "id" }] as any,
      url: "url",
      success: "success"
    };
    payload.submissions.serverCount = 100;

    expect(reducer.$emit(receiveSubmissions.toString(), state, payload)).toEqual({
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
  it("should return state (failSubmissions)", () => {
    const reducer = submissionsReducer("name");
    const state: any = {};
    const payload = {
      error: new Error("message")
    };

    expect(reducer.$emit(failSubmissions.toString(), state, payload)).toEqual({
      name: "name",
      error: payload.error,
      isActive: false
    });
  });
});
