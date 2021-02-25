import {
  selectIsAuthenticated,
  selectRoles,
  selectUser
} from "./auth.selectors";

describe("auth Selectors", () => {
  describe("selectIsAuthenticated()", () => {
    it("should return isAuthenticated", () => {
      expect(
        selectIsAuthenticated({
          auth: {
            authenticated: true
          }
        })
      ).toEqual(true);
    });
  });

  describe("selectRoles()", () => {
    it("should return roles", () => {
      expect(
        selectRoles({
          auth: {
            roles: {
              administrator: {}
            }
          }
        })
      ).toEqual({
        administrator: {}
      });
    });
  });

  describe("selectUser()", () => {
    it("should return user", () => {
      expect(
        selectUser({
          auth: {
            user: {
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
