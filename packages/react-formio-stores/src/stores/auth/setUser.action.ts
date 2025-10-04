import { Formio } from "@formio/js";

import { receiveUser } from "./auth.actions";
import { AUTH } from "./auth.constant";

export const setUser = (user: any) => (dispatch: any) => {
  Formio.setUser(user);
  dispatch(receiveUser(AUTH, { user }));
};
