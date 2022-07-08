import { Formio } from "formiojs";

import { receiveUser } from "./auth.actions";
import { AUTH } from "./auth.constant";
import { setUser } from "./setUser.action";

jest.mock("./auth.actions");

describe("setUser()", () => {
  beforeEach(() => {
    jest.spyOn(Formio, "setUser");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should call logout", async () => {
    const dispatch = jest.fn();
    const user = {};

    await setUser(user)(dispatch);

    expect(Formio.setUser).toHaveBeenCalledWith(user);
    expect(receiveUser).toHaveBeenCalledWith(AUTH, { user });
  });
});
