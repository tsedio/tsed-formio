import { Formio } from "formiojs";
import { mapRequestParams } from "../../utils/mapRequestParams";
import {
  failForms,
  getForms,
  receiveForms,
  requestForms
} from "./forms.actions";

jest.mock("formiojs");
jest.mock("../../utils/mapRequestParams");

describe("Forms actions", () => {
  beforeEach(() => {
    (mapRequestParams as any).mockImplementation((o: any) => o);
  });
  afterEach(() => jest.resetAllMocks());
  describe("getForms", () => {
    it("should return a result", async () => {
      // GIVEN
      (Formio as any).prototype.loadForms.mockReturnValue(
        Promise.resolve([{}])
      );
      (Formio as any).getProjectUrl.mockReturnValue("https://formio");
      const dispatch = jest.fn();
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
      await new Promise((resolve) =>
        getForms(name, parameters, resolve)(dispatch, getState)
      );

      // THEN
      expect(Formio).toHaveBeenCalledWith("https://formio/form");
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
      (Formio.prototype.loadForms as any).mockReturnValue(
        Promise.reject(new Error("message"))
      );
      (Formio.getProjectUrl as any).mockReturnValue("https://formio");

      const dispatch = jest.fn();
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
      await new Promise((resolve) =>
        getForms(name, parameters, resolve)(dispatch, getState)
      );

      // THEN
      expect(Formio).toHaveBeenCalledWith("https://formio/form");
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
