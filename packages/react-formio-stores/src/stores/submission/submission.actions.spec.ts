import { Formio } from "formiojs";

import {
  clearSubmissionError,
  deleteSubmission,
  failSubmission,
  getSubmission,
  receiveSubmission,
  requestSubmission,
  resetSubmission,
  saveSubmission,
  sendSubmission
} from "./submission.actions";

vi.mock("formiojs", async (originalImport) => {
  return {
    ...(await originalImport()),
    Formio: class {
      static url: string;

      constructor(public url: string) {
        (Formio as any).url = url;
      }

      static getProjectUrl() {}

      loadSubmission() {}
      saveSubmission() {}
      deleteSubmission() {}
    }
  };
});

describe("Submission actions", () => {
  beforeEach(() => {
    (Formio as any).url = undefined;
  });
  describe("getSubmission", () => {
    it("should return a result", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "loadSubmission").mockResolvedValue({});

      const dispatch = vi.fn();
      const name = "name";
      const id = "123454";
      const formId = "formId";

      const getState = () => ({
        [name]: {}
      });

      // WHEN
      await new Promise((resolve) => getSubmission(name, formId, id, resolve)(dispatch, getState));

      // THEN
      expect((Formio as any).url).toEqual("/formId/submission/123454");
      expect(Formio.prototype.loadSubmission).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: requestSubmission.toString(),
        payload: {
          formId: "formId",
          id: "123454",
          url: "/formId/submission/123454"
        }
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: receiveSubmission.toString(),
        name: "name",
        payload: {
          submission: {},
          url: "/formId/submission/123454"
        }
      });
    });
    it("should do nothing when submission is already loaded", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "loadSubmission").mockResolvedValue({});

      const dispatch = vi.fn();
      const name = "name";
      const id = "123454";
      const formId = "formId";

      const getState = () => ({
        id
      });

      // WHEN
      await getSubmission(name, formId, id)(dispatch, getState);

      // THEN
      expect((Formio as any).url).toBeUndefined();
    });
    it("should throw error", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "loadSubmission").mockRejectedValue(new Error("message"));

      const dispatch = vi.fn();
      const name = "name";
      const id = "123454";
      const formId = "formId";

      const getState = () => ({
        [name]: {}
      });

      // WHEN
      await new Promise((resolve) => getSubmission(name, formId, id, resolve)(dispatch, getState));

      // THEN
      expect((Formio as any).url).toEqual("/formId/submission/123454");
      expect(Formio.prototype.loadSubmission).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: failSubmission.toString(),
        payload: {
          error: new Error("message")
        }
      });
    });
  });
  describe("saveSubmission", () => {
    it("should return a result", async () => {
      // GIVEN
      const dispatch = vi.fn();
      const name = "name";
      const data = { _id: "123454" };
      const formId = "formId";

      vi.spyOn(Formio.prototype, "saveSubmission").mockResolvedValue(data);
      // WHEN
      await new Promise((resolve) => saveSubmission(name, formId, data as never, resolve)(dispatch));

      // THEN
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: clearSubmissionError.toString()
      });
      expect((Formio as any).url).toEqual("/formId/submission/123454");
      expect(Formio.prototype.saveSubmission).toHaveBeenCalledWith(data);
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: sendSubmission.toString(),
        payload: {
          formId,
          submission: { _id: "123454" }
        }
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        payload: {
          url: "/formId/submission/123454",
          submission: data
        },
        type: receiveSubmission.toString()
      });
    });
    it("should throw error", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "saveSubmission").mockRejectedValue(new Error("message"));

      const dispatch = vi.fn();
      const name = "name";
      const data = { _id: "123454" };
      const formId = "formId";

      // WHEN
      await new Promise((resolve) => saveSubmission(name, formId, data as never, resolve)(dispatch));

      // THEN
      expect((Formio as any).url).toEqual("/formId/submission/123454");
      expect(Formio.prototype.saveSubmission).toHaveBeenCalledWith(data);
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: failSubmission.toString(),
        payload: {
          error: new Error("message")
        }
      });
    });
  });
  describe("deleteSubmission", () => {
    it("should return a result", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "deleteSubmission").mockResolvedValue({});

      const dispatch = vi.fn();
      const name = "name";
      const id = "123454";
      const formId = "formId";

      // WHEN
      await new Promise((resolve) => deleteSubmission(name, formId, id, resolve)(dispatch));

      // THEN
      expect((Formio as any).url).toEqual("/formId/submission/123454");
      expect(Formio.prototype.deleteSubmission).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: resetSubmission.toString()
      });
    });
    it("should throw error", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "deleteSubmission").mockRejectedValue(new Error("message"));
      const dispatch = vi.fn();
      const name = "name";
      const id = "123454";
      const formId = "formId";

      // WHEN
      await new Promise((resolve) => deleteSubmission(name, formId, id, resolve)(dispatch));

      // THEN
      expect((Formio as any).url).toEqual("/formId/submission/123454");
      expect(Formio.prototype.deleteSubmission).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: failSubmission.toString(),
        payload: {
          error: new Error("message")
        }
      });
    });
  });
});
