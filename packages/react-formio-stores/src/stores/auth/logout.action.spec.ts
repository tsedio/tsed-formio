import { Formio } from "@formio/js";

import { logoutUser } from "./auth.actions";
import { AUTH } from "./auth.constant";
import { logout } from "./logout.action";

vi.mock("./auth.actions");
vi.mock("@formio/js");

describe("logout()", () => {
  beforeEach(() => {
    vi.spyOn(Formio, "logout");
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("should call logout", async () => {
    const dispatch = vi.fn();

    await logout()(dispatch);

    expect(Formio.logout).toHaveBeenCalledWith();
    expect(logoutUser).toHaveBeenCalledWith(AUTH);
  });
});
