import { AuthState, checkRoleFormAccess, FormSchema } from "@tsed/react-formio";
import { FormAccessView } from "./formAccess.view";
import { FormActionsView } from "./formActions.view";
import { FormEditView } from "./formEdit.view";
import { FormPreviewView } from "./formPreview.view";
import { SubmissionsView } from "./submissions.view";

export const formRoutes: any[] = [
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
    label: "Export"
    // component: FormsExportView
  },
  {
    action: "delete",
    exact: true,
    icon: "bx bx-trash mr-2 -ml-1",
    label: "Delete",
    // component: FormsDeleteItemView,
    roles: ["administrator", "owner"]
  }
];

export function findRoute(routes: any[], formAction: string) {
  return routes.find(({ action }: any) =>
    formAction === "delete" ? action === "edit" : formAction === action
  );
}

export function getFormRoutes({
  operations,
  formAction,
  auth,
  form
}: {
  operations: Record<string, boolean>;
  formAction: string;
  auth: AuthState<any>;
  form: Partial<FormSchema>;
}) {
  return formRoutes
    .filter(
      (item) => operations[item.action] || operations[item.action] === undefined
    )
    .filter((item) =>
      formAction === "create" ? ["back"].includes(item.action) : item
    )
    .filter((item) => item.label || item.icon)
    .filter((item) => checkRoleFormAccess(auth, form, item.roles))
    .filter((item) => !item.when || item.when(form, item));
}
