import { selectError, selectIsActive, selectRoot } from "./root.selectors";

describe("root Selectors", () => {
  describe("selectRoot()", () => {
    it("should return submission", () => {
      expect(
        // eslint-disable-next-line no-undef
        selectRoot("submission", {
          submission: {
            data: {
              _id: "id"
            }
          }
        })
      ).toEqual({
        data: {
          _id: "id"
        }
      });
    });
  });
  describe("selectError()", () => {
    it("should return error", () => {
      expect(
        selectError("submission", {
          submission: {
            error: null,
            data: {
              _id: "id"
            }
          }
        })
      ).toEqual(null);
    });
  });
  describe("selectIsActive()", () => {
    it("should return error", () => {
      expect(
        selectIsActive("submission", {
          submission: {
            error: null,
            isActive: true,
            data: {
              _id: "id"
            }
          }
        })
      ).toEqual(true);
    });
  });
});
