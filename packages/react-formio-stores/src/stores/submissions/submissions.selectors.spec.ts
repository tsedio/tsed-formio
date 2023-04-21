import { selectSubmissions, selectSubmissionsParameters } from "./submissions.selectors";

describe("Submissions Selectors", () => {
  describe("selectSubmissions()", () => {
    it("should return data", () => {
      expect(
        selectSubmissions("submissions", {
          submissions: {
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
  describe("selectSubmissionsParameters()", () => {
    it("should return data", () => {
      expect(
        selectSubmissionsParameters("submissions", {
          submissions: {
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
