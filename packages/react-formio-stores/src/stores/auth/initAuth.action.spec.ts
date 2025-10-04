import { Formio } from "@formio/js";

import { requestUser } from "./auth.actions";
import { AUTH } from "./auth.constant";
import { getAccess } from "./getAccess.action";
import { getProjectAccess } from "./getProjectAccess.action";
import { initAuth } from "./initAuth.action";
import { logout } from "./logout.action";
import { setUser } from "./setUser.action";

vi.mock("./getAccess.action");
vi.mock("./getProjectAccess.action");
vi.mock("./setUser.action");
vi.mock("./logout.action");
vi.mock("./auth.actions");

describe("initAuth()", () => {
  beforeEach(() => {
    vi.spyOn(Formio, "currentUser");
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("should init auth", async () => {
    const dispatch = vi.fn();
    const done = vi.fn();
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
    const dispatch = vi.fn();
    const done = vi.fn();
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
