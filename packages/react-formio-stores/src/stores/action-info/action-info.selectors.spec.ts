import { selectActionInfo } from "./action-info.selectors";

describe("actions Selectors", () => {
  describe("selectActionInfo()", () => {
    it("should return actions", () => {
      expect(
        selectActionInfo({
          actionInfo: {
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
