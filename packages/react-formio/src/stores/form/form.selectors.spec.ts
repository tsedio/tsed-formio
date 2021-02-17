import { selectForm } from "./form.selectors";

describe("form Selectors", () => {
  describe("selectForm()", () => {
    it("should return data", () => {
      expect(
        selectForm("form", {
          form: {
            data: {
              id: "id"
            }
          }
        })
      ).toEqual({
        id: "id"
      });
    });
  });
});
