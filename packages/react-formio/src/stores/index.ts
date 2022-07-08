import { combine } from "@tsed/redux-utils";

import { actionReducer } from "./action";
import { actionInfoReducer } from "./action-info";
import { actionsReducer } from "./actions";
import { authReducer } from "./auth";
import { formReducer } from "./form";
import { formsReducer } from "./forms";
import { submissionReducer } from "./submission";
import { submissionsReducer } from "./submissions";

export * from "./action";
export * from "./action-info";
export * from "./actions";
export * from "./auth";
export * from "./form";
export * from "./forms";
export * from "./root";
export * from "./submission";
export * from "./submissions";

export const defaultFormioReducer = combine(
  authReducer,
  actionsReducer,
  actionReducer,
  actionInfoReducer,
  formReducer("form"),
  formsReducer("forms", { query: { type: "form" } }),
  formReducer("resource"),
  formsReducer("resources", { query: { type: "resource" } }),
  submissionReducer("submission"),
  submissionsReducer("submissions")
);
