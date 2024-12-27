import { Formio } from "formiojs";

import { receiveUser } from "./auth.actions";
import { AUTH } from "./auth.constant";
import { setUser } from "./setUser.action";

vi.mock("./auth.actions");

describe("setUser()", () => {
  beforeEach(() => {
    vi.spyOn(Formio, "setUser");
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("should call logout", async () => {
    const dispatch = vi.fn();
    const user = {};

    await setUser(user)(dispatch);

    expect(Formio.setUser).toHaveBeenCalledWith(user);
    expect(receiveUser).toHaveBeenCalledWith(AUTH, { user });
  });
});
