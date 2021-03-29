import { ExtendedComponentSchema } from "formiojs";
import { FormSchema } from "../../interfaces/FormSchema";

export function getRoleComponent({
  label,
  key,
  description,
  choices,
  data
}: any): ExtendedComponentSchema {
  return {
    label,
    key,
    description,
    type: "select",
    labelPosition: "top",
    widget: "choicesjs",
    placeholder: "Select roles...",
    tooltip: "",
    multiple: true,
    dataSrc: "values",
    defaultValue: "",
    data: {
      values: choices
    },
    template: "<span>{{ item.label }}</span>",
    searchEnabled: true,
    selectThreshold: 0,
    validate: {
      required: false,
      custom: "",
      customPrivate: false
    },
    values: data
  };
}

export function getButton(): ExtendedComponentSchema {
  return {
    type: "button",
    label: "Save access",
    key: "submit",
    size: "md",
    block: false,
    action: "submit",
    disableOnInvalid: true,
    theme: "primary",
    input: true,
    widget: {
      type: "input"
    }
  };
}

function toDescription(description: string, hr = true): string {
  return (
    '<span class="text-sm">' +
    description +
    "</span> " +
    (hr ? '<hr class="mt-6 mb-5 border-gray-200 mx-20"/>' : "")
  );
}

export function getSubmissionPermissionForm({ choices }: any): FormSchema {
  return {
    description:
      "<strong>Elevated permissions allow users to access and modify other user's entities. Assign with caution.</strong>",
    components: [
      getRoleComponent({
        key: "create_own",
        label: '<h4 class="text-gray-800">Create Own Submissions</h4>',
        description: toDescription(
          "The Create Own Submissions permission will allow a user with one of the Roles to create a Submission. Upon creating the Submission, the user will be defined as its owner."
        ),
        choices
      }),
      getRoleComponent({
        key: "create_all",
        label: '<h4 class="text-gray-800">Create All Submissions</h4>',
        description: toDescription(
          '<strong class="text-yellow-600">Elevated Permission:</strong> The Create All Submissions permission will allow a user with one of the Roles to create a new Submission and assign ownership of that Submission to another user.'
        ),
        choices
      }),
      getRoleComponent({
        key: "read_own",
        label: '<h4 class="text-gray-800">Read Own Submissions</h4>',
        description: toDescription(
          "The Read Own Submissions permission will allow a user with one of the Roles to read a Submission. A user can only read a Submission if they are defined as its owner."
        ),
        choices
      }),
      getRoleComponent({
        key: "read_all",
        label: '<h4 class="text-gray-800">Read All Submissions</h4>',
        description: toDescription(
          '<strong class="text-yellow-600">Elevated Permission:</strong> The Read All Submissions permission will allow a user with one of the Roles to read all Submissions regardless of who owns them.'
        ),
        choices
      }),
      getRoleComponent({
        key: "update_own",
        label: '<h4 class="text-gray-800">Update Own Submissions</h4>',
        description: toDescription(
          "The Update Own Submissions permission will allow a user with one of the Roles to update a Submission. A user can only update a Submission if they are defined as its owner."
        ),
        choices
      }),
      getRoleComponent({
        key: "update_all",
        label: '<h4 class="text-gray-800">Update All Submissions</h4>',
        description: toDescription(
          '<strong class="text-yellow-600">Elevated Permission:</strong> The Update All Submissions permission will allow a user with one of the Roles to update a Submission, regardless of who owns the Submission. Additionally with this permission, a user can change the owner of a Submission.'
        ),
        choices
      }),
      getRoleComponent({
        key: "delete_own",
        label: '<h4 class="text-gray-800">Delete Own Submissions</h4>',
        description: toDescription(
          "The Delete Own Submissions permission will allow a user with one of the Roles, to delete a Submission. A user can only delete a Submission if they are defined as its owner."
        ),
        choices
      }),
      getRoleComponent({
        key: "delete_all",
        label: '<h4 class="text-gray-800">Delete All Submissions</h4>',
        description: toDescription(
          '<strong class="text-yellow-600">Elevated Permission:</strong> The Delete All Submissions permission will allow a user with one of the Roles to delete a Submission, regardless of who owns the Submission.',
          false
        ),
        choices
      }),
      getButton()
    ]
  };
}

export function getAccessPermissionForm({ choices }: any): FormSchema {
  return {
    description:
      "<strong>Elevated permissions allow users to access and modify other user's entities. Assign with caution.</strong>",
    components: [
      getRoleComponent({
        key: "read_own",
        label:
          '<h4 class="text-gray-800">Read Form Definition (Restricted to owner)</h4>',
        description: toDescription(
          "The Read Own permission will allow a user, with one of the given Roles, to read a form. A user can only read a form if they are defined as its owner."
        ),
        choices
      }),
      getRoleComponent({
        key: "read_all",
        label: "<h4>Read Form Definition</h4>",
        description: toDescription(
          '<strong class="text-yellow-600">Elevated Permission:</strong> The Read permission will allow a user, with one of the given Roles, to read the form.'
        ),
        choices
      }),
      getRoleComponent({
        key: "update_own",
        label:
          '<h4 class="text-gray-800">Update Form Definition (Restricted to owner)</h4>',
        description: toDescription(
          "The Update Own permission will allow a user, with one of the given Roles, to update a form. A user can only update a form if they are defined as its owner."
        ),
        choices
      }),
      getRoleComponent({
        key: "update_all",
        label: '<h4 class="text-gray-800">Update Form Definition</h4>',
        description: toDescription(
          '<strong class="text-yellow-600">Elevated Permission:</strong> The Update permission will allow a user, with one of the given Roles, to read and edit the form.'
        ),
        choices
      }),
      getRoleComponent({
        key: "delete_own",
        label:
          '<h4 class="text-gray-800">Delete Form Definition (Restricted to owner)</h4>',
        description: toDescription(
          "The Delete Own permission will allow a user, with one of the given Roles, to delete a form. A user can only delete a form if they are defined as its owner."
        ),
        choices
      }),
      getRoleComponent({
        key: "delete_all",
        label: '<h4 class="text-gray-800">Delete Form Definition</h4>',
        description: toDescription(
          '<strong class="text-yellow-600">Elevated Permission:</strong> The Delete permission will allow a user, with one of the given Roles, to delete the form.',
          false
        ),
        choices
      }),
      getButton()
    ]
  };
}

export function mapRoles(roles: {
  [key: string]: { title: string; _id: string };
}): { label: string; value: string }[] {
  return Object.values(roles).map((role) => {
    return {
      label: role.title,
      value: role._id
    };
  });
}

export function formAccessToSubmission(
  access: Record<string, any> = {}
): Record<string, string[]> {
  return Object.values(access).reduce((o: any, role: any) => {
    o[role.type] = role.roles;
    return o;
  }, {});
}

export function mapSubmissionAccess({ data }: any) {
  const accessRoles: any[] = [];

  Object.entries(data).forEach(([accessType, roles]) => {
    if (accessType === "submit") {
      return;
    }
    accessRoles.push({
      type: accessType,
      roles
    });
  });

  return accessRoles;
}
