import { selectForms, selectFormsParameters } from "./forms.selectors";

describe("form Selectors", () => {
  describe("selectForm()", () => {
    it("should return data", () => {
      expect(
        selectForms("forms", {
          forms: {
            data: [
              {
                id: "id"
              }
            ]
          }
        })
      ).toEqual([
        {
          id: "id"
        }
      ]);
    });
  });
  describe("selectFormsParameters()", () => {
    it("should return data", () => {
      expect(
        selectFormsParameters("forms", {
          forms: {
            parameters: {},
            data: [
              {
                id: "id"
              }
            ]
          }
        })
      ).toEqual({});
    });
  });
});
