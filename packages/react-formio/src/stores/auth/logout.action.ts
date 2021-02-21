import { Formio } from "formiojs";
import { logoutUser } from "./auth.actions";
import { USER_AUTH } from "./auth.constant";

export const logout = () => (dispatch: any) => {
  Formio.logout();
  dispatch(logoutUser(USER_AUTH));
};
