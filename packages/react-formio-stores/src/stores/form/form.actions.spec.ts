import { Formio } from "@formio/js";

import { deleteForm, failForm, getForm, receiveForm, requestForm, resetForm, saveForm, sendForm } from "./form.actions";

vi.mock("@formio/js", async (originalImport) => {
  return {
    ...(await originalImport()),
    Formio: class {
      static url: string;

      constructor(public url: string) {
        (Formio as any).url = url;
      }

      static getProjectUrl() {}
      loadForms() {}
      loadForm() {}
      saveForm() {}
      deleteForm() {}
    }
  };
});

describe("Form actions", () => {
  beforeEach(() => {
    (Formio as any).url = undefined;
  });
  describe("getForm", () => {
    it("should return a result", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "loadForm").mockResolvedValue({});

      const dispatch = vi.fn();
      const name = "name";
      const formId = "formId";

      const getState = () => ({
        [name]: {}
      });

      // WHEN
      await new Promise((resolve) => getForm(name, formId, resolve)(dispatch, getState));

      // THEN
      expect((Formio as any).url).toEqual("/formId");
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
      vi.spyOn(Formio.prototype, "loadForm").mockResolvedValue({});

      const dispatch = vi.fn();
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
      expect((Formio as any).url).toBeUndefined();
    });
    it("should throw error", async () => {
      // GIVEN
      // @ts-ignore
      vi.spyOn(Formio.prototype, "loadForm").mockRejectedValue(new Error("message"));

      const dispatch = vi.fn();
      const name = "name";
      const formId = "formId";

      const getState = () => ({
        [name]: {}
      });

      // WHEN
      await new Promise((resolve) => getForm(name, formId, resolve)(dispatch, getState));

      // THEN
      expect((Formio as any).url).toEqual("/formId");
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
      const dispatch = vi.fn();
      const name = "name";
      const formId = "formId";
      const data = { _id: formId };

      // @ts-ignore
      vi.spyOn(Formio.prototype, "saveForm").mockResolvedValue(data);
      // WHEN
      await new Promise((resolve) => saveForm(name, data, resolve)(dispatch));

      // THEN
      expect((Formio as any).url).toEqual("/formId");
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
      vi.spyOn(Formio.prototype, "saveForm").mockRejectedValue(new Error("message"));

      const dispatch = vi.fn();
      const name = "name";
      const formId = "formId";
      const data = { _id: formId };

      // WHEN
      await new Promise((resolve) => saveForm(name, data, resolve)(dispatch));

      // THEN
      expect((Formio as any).url).toEqual("/formId");
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
      vi.spyOn(Formio.prototype, "deleteForm").mockResolvedValue({});

      const dispatch = vi.fn();
      const name = "name";
      const formId = "formId";

      // WHEN
      await new Promise((resolve) => deleteForm(name, formId, resolve)(dispatch));

      // THEN
      expect((Formio as any).url).toEqual("/formId");
      expect(Formio.prototype.deleteForm).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        name: "name",
        type: resetForm.toString()
      });
    });
    it("should throw error", async () => {
      // GIVEN
      vi.spyOn(Formio.prototype, "deleteForm").mockRejectedValue(new Error("message"));

      const dispatch = vi.fn();
      const name = "name";
      const formId = "formId";

      // WHEN
      await new Promise((resolve) => deleteForm(name, formId, resolve)(dispatch));

      // THEN
      expect((Formio as any).url).toEqual("/formId");
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
