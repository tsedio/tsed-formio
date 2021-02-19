import { combine } from "@tsed/redux-utils";
import { actionReducer } from "./action";
import { actionInfoReducer } from "./action-info";
import { actionsReducer } from "./actions";
import { authReducer } from "./auth";
import { formReducer } from "./form";
import { formsReducer } from "./forms";
import { submissionReducer } from "./submission";
import { submissionsReducer } from "./submissions";

export * from "./auth";
export * from "./action";
export * from "./action-info";
export * from "./actions";
export * from "./form";
export * from "./forms";
export * from "./submission";
export * from "./submissions";
export * from "./root";

export const defaultFormioReducer = combine(
  authReducer("auth"),
  actionsReducer("actions"),
  actionReducer("action"),
  actionInfoReducer("actionInfo"),
  formReducer("form"),
  formsReducer("forms", { query: { type: "form", tags: "common" } }),
  formReducer("resource"),
  formsReducer("resources", { query: { type: "resource", tags: "common" } }),
  submissionReducer("submission"),
  submissionsReducer("submissions")
);
