import { failSubmission, receiveSubmission, requestSubmission, resetSubmission, sendSubmission } from "./submission.actions";
import { submissionReducer } from "./submission.reducers";

describe("Submission reducers", () => {
  it("should return state (resetSubmission)", () => {
    const reducer = submissionReducer("name");
    const state: any = {};
    const payload = {};

    expect(reducer.$emit(resetSubmission.toString(), state, payload)).toEqual({
      name: "name",
      error: null,
      formId: "",
      id: "",
      isActive: false,
      lastUpdated: 0,
      data: {},
      url: ""
    });
  });
  it("should return state (requestSubmission)", () => {
    const reducer = submissionReducer("name");
    const state: any = {};
    const payload = {
      formId: "formId",
      id: "id",
      url: "url"
    };

    expect(reducer.$emit(requestSubmission.toString(), state, payload)).toEqual({
      name: "name",
      formId: "formId",
      id: "id",
      isActive: true,
      data: {},
      url: "url"
    });
  });

  it("should return state (sendSubmission)", () => {
    const reducer = submissionReducer("name");
    const state: any = {};
    const payload = {
      formId: "formId",
      submission: {},
      id: "id",
      url: "url"
    };

    expect(reducer.$emit(sendSubmission.toString(), state, payload)).toEqual({
      name: "name",
      formId: "formId",
      id: "id",
      isActive: true,
      data: {},
      url: "url"
    });
  });

  it("should return state (receiveSubmission)", () => {
    const reducer = submissionReducer("name");
    const state: any = {};
    const payload = {
      formId: "formId",
      id: "id",
      url: "url",
      submission: {
        _id: "id"
      }
    };

    expect(reducer.$emit(receiveSubmission.toString(), state, payload)).toEqual({
      name: "name",
      url: "url",
      error: null,
      isActive: false,
      data: {
        _id: "id"
      }
    });
  });

  it("should return state (failSubmission)", () => {
    const reducer = submissionReducer("name");
    const state: any = {};
    const payload = {
      error: new Error("message")
    };

    expect(reducer.$emit(failSubmission.toString(), state, payload)).toEqual({
      name: "name",
      error: payload.error,
      isActive: false
    });
  });
});
