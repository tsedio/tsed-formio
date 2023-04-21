import type { TabsItemProps } from "@tsed/react-formio";
import { AuthState, checkRoleFormAccess, FormSchema } from "@tsed/react-formio-stores";
import React from "react";

import { FormAccessView } from "./formAccess.view";
import { FormActionsView } from "./formActions.view";
import { FormEditView } from "./formEdit.view";
import { FormExportView } from "./formExport.view";
import { FormPreviewView } from "./formPreview.view";
import { FormSettingsView } from "./formSettings.view";
import { SubmissionsView } from "./submissions.view";

export interface FormRoute<User = any> extends TabsItemProps, Record<string, unknown> {
  action: string;
  exact: boolean;
  component?: React.ComponentType<any>;
  roles?: string[];

  when?(ctx: { formAction: string; auth: AuthState<User>; form: Partial<FormSchema>; item: FormRoute }): boolean;
}

export interface FormRoutesOptions<User = any> {
  formRoutes: FormRoute[];
  operationsSettings: Record<string, boolean>;
  formAction: string;
  auth: AuthState<User>;
  form: Partial<FormSchema>;
}

export const defaultFormRoutes: FormRoute[] = [
  {
    action: "back",
    exact: true,
    icon: "chevron-left",
    back: true
  },
  {
    action: "edit",
    exact: true,
    icon: "edit",
    label: "Edit",
    component: FormEditView
  },
  {
    action: "submissions",
    exact: false,
    icon: "data",
    label: "Data",
    component: SubmissionsView
  },
  {
    action: "preview",
    exact: true,
    icon: "test-tube",
    label: "Preview",
    component: FormPreviewView
  },
  {
    action: "actions",
    exact: false,
    icon: "paper-plane",
    label: "Actions",
    component: FormActionsView,
    roles: ["administrator", "owner"]
  },
  {
    action: "access",
    exact: true,
    icon: "lock",
    label: "Access",
    component: FormAccessView,
    roles: ["administrator", "owner"]
  },
  {
    action: "export",
    exact: true,
    icon: "download",
    label: "Export",
    component: FormExportView
  },
  {
    action: "settings",
    exact: true,
    icon: "cog",
    label: "Settings",
    roles: ["administrator", "owner"],
    component: FormSettingsView
  },
  {
    action: "delete",
    exact: true,
    icon: "trash",
    label: "Delete",
    roles: ["administrator", "owner"]
  }
];

export function findRoute(routes: FormRoute[], formAction: string): FormRoute | undefined {
  return routes.find(({ action }) => (formAction === "delete" ? action === "edit" : formAction === action));
}

export function getFormRoutes<User = any>({
  formRoutes = defaultFormRoutes,
  operationsSettings,
  formAction,
  auth,
  form
}: FormRoutesOptions<User>) {
  return formRoutes
    .filter((item) => {
      return (
        (operationsSettings[item.action] || operationsSettings[item.action] === undefined) &&
        (formAction === "create" ? ["back"].includes(item.action) : item) &&
        (item.label || item.icon)
      );
    })
    .filter((item) => checkRoleFormAccess(auth, form, item.roles))
    .filter((item) => !item.when || item.when({ auth, form, item, formAction }));
}
