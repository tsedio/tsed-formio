import { isAuthorized } from "./auth.utils";

describe("Auth utils", () => {
  describe("isAuthorized()", () => {
    it("should return boolean", () => {
      expect(isAuthorized(undefined)).toEqual(false);
      expect(isAuthorized({ authenticated: true } as any)).toEqual(true);
      expect(isAuthorized({ authenticated: true } as any, [])).toEqual(true);
      expect(
        isAuthorized(
          {
            authenticated: true,
            is: { administrator: true }
          } as any,
          ["administrator"]
        )
      ).toEqual(true);
      expect(
        isAuthorized(
          {
            authenticated: true,
            is: { administrator: true }
          } as any,
          ["anonymous"]
        )
      ).toEqual(false);
    });
  });
});
