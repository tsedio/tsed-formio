import { Formio } from "formiojs";
import { logoutUser } from "./auth.actions";
import { USER_AUTH } from "./auth.constant";
import { logout } from "./logout.action";

jest.mock("./auth.actions");

describe("logout()", () => {
  beforeEach(() => {
    jest.spyOn(Formio, "logout");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should call logout", async () => {
    const dispatch = jest.fn();

    await logout()(dispatch);

    expect(Formio.logout).toHaveBeenCalledWith();
    expect(logoutUser).toHaveBeenCalledWith(USER_AUTH);
  });
});
