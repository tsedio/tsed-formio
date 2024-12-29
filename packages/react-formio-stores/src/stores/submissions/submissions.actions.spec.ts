import { Formio } from "@formio/js";

import { mapRequestParams } from "../../utils/mapRequestParams";
import { failSubmissions, getSubmissions, receiveSubmissions, requestSubmissions } from "./submissions.actions";

vi.mock("@formio/js", async (originalImport) => {
  return {
    ...(await originalImport()),
    Formio: class {
      static url: string;

      constructor(public url: string) {
        (Formio as any).url = url;
      }

      static getProjectUrl() {}
      loadSubmissions() {}
      availableActions() {}
    }
  };
});
vi.mock("../../utils/mapRequestParams");

describe("Submissions actions", () => {
  beforeEach(() => {
    (mapRequestParams as any).mockImplementation((o: any) => o);
  });
  describe("getSubmissions", () => {
    it("should return a result", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "loadSubmissions").mockReturnValue(Promise.resolve([{}]));
      vi.spyOn(Formio, "getProjectUrl").mockReturnValue("https://formio");

      const dispatch = vi.fn();
      const name = "name";
      const formId = "formId";
      const parameters = {
        pageSize: 10,
        pageIndex: 0
      };

      const getState = () => ({
        [name]: {
          parameters
        }
      });

      // WHEN
      await new Promise((resolve) => getSubmissions(name, formId, parameters, resolve)(dispatch, getState));

      // THEN
      expect((Formio as any).url).toEqual("https://formio/formId/submission");
      expect(Formio.prototype.loadSubmissions).toHaveBeenCalledWith({
        params: parameters
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: requestSubmissions.toString(),
        payload: {
          formId,
          parameters
        }
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        payload: {
          submissions: [{}]
        },
        type: receiveSubmissions.toString()
      });
    });
    it("should return a error", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "loadSubmissions").mockRejectedValue(new Error("message"));
      vi.spyOn(Formio, "getProjectUrl").mockReturnValue("https://formio");

      const dispatch = vi.fn();
      const name = "name";
      const formId = "formId";
      const parameters = {
        pageSize: 10,
        pageIndex: 0
      };

      const getState = () => ({
        [name]: {
          parameters
        }
      });

      // WHEN
      await new Promise((resolve) => getSubmissions(name, formId, parameters, resolve)(dispatch, getState));

      // THEN
      expect((Formio as any).url).toEqual("https://formio/formId/submission");
      expect(Formio.prototype.loadSubmissions).toHaveBeenCalledWith({
        params: parameters
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: requestSubmissions.toString(),
        payload: {
          formId,
          parameters
        }
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        payload: { error: new Error("message") },
        type: failSubmissions.toString()
      });
    });
  });
});
