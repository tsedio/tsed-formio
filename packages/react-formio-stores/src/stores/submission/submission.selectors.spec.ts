import { selectSubmission } from "./submission.selectors";

describe("submission Selectors", () => {
  describe("selectSubmission()", () => {
    it("should return submission", () => {
      expect(
        selectSubmission("submission", {
          submission: {
            data: {
              _id: "id"
            }
          }
        })
      ).toEqual({
        _id: "id"
      });
    });
  });
});
