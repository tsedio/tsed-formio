import { Formio } from "formiojs";

import { requestUser } from "./auth.actions";
import { AUTH } from "./auth.constant";
import { getAccess } from "./getAccess.action";
import { getProjectAccess } from "./getProjectAccess.action";
import { initAuth } from "./initAuth.action";
import { logout } from "./logout.action";
import { setUser } from "./setUser.action";

jest.mock("./getAccess.action");
jest.mock("./getProjectAccess.action");
jest.mock("./setUser.action");
jest.mock("./logout.action");
jest.mock("./auth.actions");

describe("initAuth()", () => {
  beforeEach(() => {
    jest.spyOn(Formio, "currentUser");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should init auth", async () => {
    const dispatch = jest.fn();
    const done = jest.fn();
    const user = { data: {} };

    (Formio.currentUser as any).mockResolvedValue(user);

    await initAuth(done)(dispatch);

    expect(requestUser).toHaveBeenCalledWith(AUTH);
    expect(Formio.currentUser).toHaveBeenCalledWith();
    expect(getAccess).toHaveBeenCalledWith(dispatch);
    expect(getProjectAccess).toHaveBeenCalledWith(dispatch);
    expect(setUser).toHaveBeenCalledWith(user);
    expect(logout).not.toHaveBeenCalled();
  });
  it("should call logout when user is null", async () => {
    const dispatch = jest.fn();
    const done = jest.fn();
    const user: any = null;

    (Formio.currentUser as any).mockResolvedValue(user);

    await initAuth(done)(dispatch);

    expect(requestUser).toHaveBeenCalledWith(AUTH);
    expect(Formio.currentUser).toHaveBeenCalledWith();
    expect(getAccess).toHaveBeenCalledWith(dispatch);
    expect(getProjectAccess).toHaveBeenCalledWith(dispatch);
    expect(setUser).not.toHaveBeenCalledWith();
    expect(logout).toHaveBeenCalledWith();
  });
});
