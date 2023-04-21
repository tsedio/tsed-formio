import { selectAction } from "./action.selectors";

describe("action Selectors", () => {
  describe("selectAction()", () => {
    it("should return data", () => {
      expect(
        selectAction({
          action: {
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
