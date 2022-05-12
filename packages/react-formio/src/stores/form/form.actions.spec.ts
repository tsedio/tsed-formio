import { Formio } from "formiojs";
import { deleteForm, failForm, getForm, receiveForm, requestForm, resetForm, saveForm, sendForm } from "./form.actions";

jest.mock("formiojs");

describe("Form actions", () => {
  describe("getForm", () => {
    beforeEach(() => {
      // @ts-ignore
      Formio.mockClear();
    });
    it("should return a result", async () => {
      // GIVEN
      // @ts-ignore
      Formio.prototype.loadForm.mockReturnValue(Promise.resolve({}));

      const dispatch = jest.fn();
      const name = "name";
      const formId = "formId";

      const getState = () => ({
        [name]: {}
      });

      // WHEN
      await new Promise((resolve) => getForm(name, formId, resolve)(dispatch, getState));

      // THEN
      expect(Formio).toHaveBeenCalledWith("/formId");
      expect(Formio.prototype.loadForm).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: requestForm.toString(),
        payload: {
          id: "formId",
          url: "/formId"
        }
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: receiveForm.toString(),
        payload: {
          form: {},
          url: "/formId"
        }
      });
    });
    it("should do nothing when submission is already loaded", async () => {
      // GIVEN
      // @ts-ignore
      Formio.prototype.loadForm.mockReturnValue(Promise.resolve({}));

      const dispatch = jest.fn();
      const name = "name";
      const formId = "formId";

      const getState = () => ({
        [name]: {
          data: {
            _id: formId,
            components: [{}]
          }
        }
      });

      // WHEN
      getForm(name, formId)(dispatch, getState);

      // THEN
      expect(Formio).not.toHaveBeenCalled();
    });
    it("should throw error", async () => {
      // GIVEN
      // @ts-ignore
      Formio.prototype.loadForm.mockReturnValue(Promise.reject(new Error("message")));

      const dispatch = jest.fn();
      const name = "name";
      const formId = "formId";

      const getState = () => ({
        [name]: {}
      });

      // WHEN
      await new Promise((resolve) => getForm(name, formId, resolve)(dispatch, getState));

      // THEN
      expect(Formio).toHaveBeenCalledWith("/formId");
      expect(Formio.prototype.loadForm).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: failForm.toString(),
        payload: {
          error: new Error("message")
        }
      });
    });
  });
  describe("saveForm", () => {
    it("should return a result", async () => {
      // GIVEN
      const dispatch = jest.fn();
      const name = "name";
      const formId = "formId";
      const data = { _id: formId };

      // @ts-ignore
      Formio.prototype.saveForm.mockReturnValue(Promise.resolve(data));
      // WHEN
      await new Promise((resolve) => saveForm(name, data, resolve)(dispatch));

      // THEN
      expect(Formio).toHaveBeenCalledWith("/formId");
      expect(Formio.prototype.saveForm).toHaveBeenCalledWith(data);
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: sendForm.toString(),
        payload: {
          form: data
        }
      });
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: receiveForm.toString(),
        payload: {
          form: data,
          url: "/formId"
        }
      });
    });
    it("should throw error", async () => {
      // GIVEN
      // @ts-ignore
      Formio.prototype.saveForm.mockReturnValue(Promise.reject(new Error("message")));

      const dispatch = jest.fn();
      const name = "name";
      const formId = "formId";
      const data = { _id: formId };

      // WHEN
      await new Promise((resolve) => saveForm(name, data, resolve)(dispatch));

      // THEN
      expect(Formio).toHaveBeenCalledWith("/formId");
      expect(Formio.prototype.saveForm).toHaveBeenCalledWith(data);
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: failForm.toString(),
        payload: {
          error: new Error("message")
        }
      });
    });
  });
  describe("deleteForm", () => {
    it("should return a result", async () => {
      // GIVEN
      // @ts-ignore
      Formio.prototype.deleteForm.mockReturnValue(Promise.resolve({}));

      const dispatch = jest.fn();
      const name = "name";
      const formId = "formId";

      // WHEN
      await new Promise((resolve) => deleteForm(name, formId, resolve)(dispatch));

      // THEN
      expect(Formio).toHaveBeenCalledWith("/formId");
      expect(Formio.prototype.deleteForm).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: resetForm.toString()
      });
    });
    it("should throw error", async () => {
      // GIVEN
      // @ts-ignore
      Formio.prototype.deleteForm.mockReturnValue(Promise.reject(new Error("message")));

      const dispatch = jest.fn();
      const name = "name";
      const formId = "formId";

      // WHEN
      await new Promise((resolve) => deleteForm(name, formId, resolve)(dispatch));

      // THEN
      expect(Formio).toHaveBeenCalledWith("/formId");
      expect(Formio.prototype.deleteForm).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: failForm.toString(),
        payload: {
          error: new Error("message")
        }
      });
    });
  });
});
