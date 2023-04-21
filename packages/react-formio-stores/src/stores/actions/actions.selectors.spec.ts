import { selectActions, selectAvailableActions } from "./actions.selectors";

describe("actions Selectors", () => {
  describe("selectActions()", () => {
    it("should return actions", () => {
      expect(
        selectActions({
          actions: {
            data: {
              id: "id"
            },
            availableActions: {}
          }
        })
      ).toEqual({
        id: "id"
      });
    });
  });
  describe("selectAvailableActions()", () => {
    it("should return available actions", () => {
      expect(
        selectAvailableActions({
          actions: {
            data: {
              id: "id"
            },
            availableActions: []
          }
        })
      ).toEqual([]);
    });
  });
});
