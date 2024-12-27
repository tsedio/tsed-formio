import { Formio } from "formiojs";

import { mapRequestParams } from "../../utils/mapRequestParams";
import { failForms, getForms, receiveForms, requestForms } from "./forms.actions";

vi.mock("formiojs", async (originalImport) => {
  return {
    ...(await originalImport()),
    Formio: class {
      static url: string;

      constructor(public url: string) {
        (Formio as any).url = url;
      }

      static getProjectUrl() {}
      loadForms() {}
    }
  };
});
vi.mock("../../utils/mapRequestParams");

describe("Forms actions", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    (Formio as any).url = undefined;
    (mapRequestParams as any).mockImplementation((o: any) => o);
  });

  describe("getForms", () => {
    it("should return a result", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "loadForms").mockResolvedValue([{}]);
      vi.spyOn(Formio, "getProjectUrl").mockReturnValue("https://formio");

      const dispatch = vi.fn();
      const name = "name";
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
      await new Promise((resolve) => getForms(name, parameters, resolve)(dispatch, getState));

      // THEN
      expect((Formio as any).url).toEqual("https://formio/form");
      expect(Formio.prototype.loadForms).toHaveBeenCalledWith({
        params: parameters
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: requestForms.toString(),
        payload: { parameters }
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        payload: {
          forms: [{}]
        },
        type: receiveForms.toString()
      });
    });
    it("should return a error", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "loadForms").mockRejectedValue(new Error("message"));
      vi.spyOn(Formio, "getProjectUrl").mockReturnValue("https://formio");

      const dispatch = vi.fn();
      const name = "name";
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
      await new Promise((resolve) => getForms(name, parameters, resolve)(dispatch, getState));

      // THEN
      expect((Formio as any).url).toEqual("https://formio/form");
      expect(Formio.prototype.loadForms).toHaveBeenCalledWith({
        params: parameters
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: requestForms.toString(),
        payload: { parameters }
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        payload: { error: new Error("message") },
        type: failForms.toString()
      });
    });
  });
});
