export function addDefaultSubmissionAccess(form: any, auth: any): any {
  if (!form.submissionAccess || form.submissionAccess.length === 0) {
    form.submissionAccess = [
      {
        type: "create_all",
        roles: [
          auth.roles.anonymous._id,
          auth.roles.authenticated._id,
          auth.roles.administrator._id
        ]
      },
      {
        type: "read_all",
        roles: [
          auth.roles.administrator._id,
          auth.roles.authenticated._id,
          auth.roles.anonymous._id
        ]
      },
      {
        type: "update_all",
        roles: [auth.roles.administrator._id, auth.roles.authenticated._id]
      },
      {
        type: "delete_all",
        roles: [auth.roles.administrator._id, auth.roles.authenticated._id]
      },
      {
        type: "create_own",
        roles: [auth.roles.administrator._id, auth.roles.authenticated._id]
      },
      {
        type: "read_own",
        roles: [auth.roles.administrator._id, auth.roles.authenticated._id]
      },
      {
        type: "update_own",
        roles: [auth.roles.administrator._id, auth.roles.authenticated._id]
      },
      {
        type: "delete_own",
        roles: [auth.roles.administrator._id, auth.roles.authenticated._id]
      }
    ];
  }
}
