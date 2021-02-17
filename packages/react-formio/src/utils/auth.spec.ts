import { isAuthorized } from "./auth";

describe("Auth utils", () => {
  describe("isAuthorized()", () => {
    it("should return boolean", () => {
      expect(isAuthorized(undefined)).toEqual(false);
      expect(isAuthorized({ authenticated: true })).toEqual(true);
      expect(isAuthorized({ authenticated: true }, [])).toEqual(true);
      expect(
        isAuthorized(
          {
            authenticated: true,
            is: { administrator: true }
          },
          ["administrator"]
        )
      ).toEqual(true);
      expect(
        isAuthorized(
          {
            authenticated: true,
            is: { administrator: true }
          },
          ["anonymous"]
        )
      ).toEqual(false);
    });
  });
});
