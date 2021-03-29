import { Formio } from "formiojs";
import { logoutUser } from "./auth.actions";
import { AUTH } from "./auth.constant";

export const logout = () => async (dispatch: any) => {
  await Formio.logout();
  dispatch(logoutUser(AUTH));
};
