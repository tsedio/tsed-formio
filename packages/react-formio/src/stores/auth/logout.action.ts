import { Formio } from "formiojs";
import { logoutUser } from "./auth.actions";
import { AUTH } from "./auth.constant";

export const logout = () => (dispatch: any) => {
  Formio.logout();
  dispatch(logoutUser(AUTH));
};
