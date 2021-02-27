import { Formio } from "formiojs";
import noop from "lodash/noop";
import { failUser, requestUser } from "./auth.actions";
import { AUTH } from "./auth.constant";
import { getAccess } from "./getAccess.action";
import { getProjectAccess } from "./getProjectAccess.action";
import { logout } from "./logout.action";
import { setUser } from "./setUser.action";

export const initAuth = (done = noop) => async (dispatch: any) => {
  dispatch(requestUser(AUTH));

  try {
    const [user] = await Promise.all([
      Formio.currentUser(),
      getAccess(dispatch),
      getProjectAccess(dispatch)
    ]);

    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(logout());
    }
  } catch (error) {
    dispatch(failUser(AUTH, { error }));
  }

  done();
};
