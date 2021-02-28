import { AuthState, checkRoleFormAccess, FormSchema } from "@tsed/react-formio";
import React from "react";
import { FormAccessView } from "./formAccess.view";
import { FormActionsView } from "./formActions.view";
import { FormEditView } from "./formEdit.view";
import { FormExportView } from "./formExport.view";
import { FormPreviewView } from "./formPreview.view";
import { SubmissionsView } from "./submissions.view";

export interface FormRoute<User = any> extends Record<string, unknown> {
  action: string;
  exact: boolean;
  icon: string;
  component?: React.ComponentType<any>;
  roles?: string[];

  when?(ctx: {
    formAction: string;
    auth: AuthState<User>;
    form: Partial<FormSchema>;
    item: FormRoute;
  }): boolean;
}

export interface FormRoutesOptions<User = any> {
  formRoutes: FormRoute[];
  operations: Record<string, boolean>;
  formAction: string;
  auth: AuthState<User>;
  form: Partial<FormSchema>;
}

export const defaultFormRoutes: FormRoute[] = [
  {
    action: "back",
    exact: true,
    icon: "bx bx-chevron-left",
    back: true
  },
  {
    action: "edit",
    exact: true,
    icon: "bx bxs-edit mr-2 -ml-1",
    label: "Edit",
    component: FormEditView
  },
  {
    action: "submissions",
    exact: false,
    icon: "bx bx-data mr-2 -ml-1",
    label: "Data",
    component: SubmissionsView
  },
  {
    action: "preview",
    exact: true,
    icon: "bx bx-test-tube mr-2 -ml-1",
    label: "Preview",
    component: FormPreviewView
  },
  {
    action: "actions",
    exact: false,
    icon: "bx bx-paper-plane mr-2 -ml-1",
    label: "Actions",
    component: FormActionsView,
    roles: ["administrator", "owner"]
  },
  {
    action: "access",
    exact: true,
    icon: "bx bx-lock mr-2 -ml-1",
    label: "Access",
    component: FormAccessView,
    roles: ["administrator", "owner"]
  },
  {
    action: "export",
    exact: true,
    icon: "bx bx-download mr-2 -ml-1",
    label: "Export",
    component: FormExportView
  },
  {
    action: "delete",
    exact: true,
    icon: "bx bx-trash mr-2 -ml-1",
    label: "Delete",
    roles: ["administrator", "owner"]
  }
];

export function findRoute(routes: FormRoute[], formAction: string) {
  return routes.find(({ action }) =>
    formAction === "delete" ? action === "edit" : formAction === action
  );
}

export function getFormRoutes<User = any>({
  formRoutes = defaultFormRoutes,
  operations,
  formAction,
  auth,
  form
}: FormRoutesOptions<User>) {
  return formRoutes
    .filter((item) => {
      return (
        (operations[item.action] || operations[item.action] === undefined) &&
        (formAction === "create" ? ["back"].includes(item.action) : item) &&
        (item.label || item.icon)
      );
    })
    .filter((item) => checkRoleFormAccess(auth, form, item.roles))
    .filter(
      (item) => !item.when || item.when({ auth, form, item, formAction })
    );
}
