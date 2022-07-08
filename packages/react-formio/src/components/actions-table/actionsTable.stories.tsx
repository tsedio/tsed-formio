import React from "react";

import { ActionsTable } from "./actionsTable.component";

export default {
  title: "ReactFormio/ActionsTable",
  component: ActionsTable,
  argTypes: {
    data: {
      control: {
        type: "object"
      }
    },
    operations: {
      control: {
        type: "object"
      }
    },
    isLoading: {
      control: {
        type: "boolean"
      }
    },
    isEmpty: {
      control: {
        type: "boolean"
      }
    },
    disableFilters: {
      control: {
        type: "boolean"
      }
    },
    disablePagination: {
      control: {
        type: "boolean"
      }
    },
    tags: {
      control: {
        type: "object"
      }
    },
    onAddAction: {
      action: "onAddAction"
    }
  },
  parameters: {}
};

export const Sandbox = (args: any) => {
  return <ActionsTable {...args} data={args.isEmpty ? [] : args.data} />;
};

Sandbox.args = {
  icon: "server",
  availableActions: [
    {
      name: "email",
      title: "Email",
      description: "Allows you to email people on submission.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create"],
        priority: 0,
        name: "email",
        title: "Email"
      }
    },
    {
      name: "webhook",
      title: "Webhook (Premium)",
      description: "Allows you to trigger an external interface.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create", "update", "delete"],
        priority: 0,
        name: "webhook",
        title: "Webhook (Premium)"
      },
      premium: true
    },
    {
      name: "sql",
      title: "SQL Query",
      description: "Allows you to execute a remote SQL Query.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create"],
        priority: 0,
        name: "sql",
        title: "SQL Query"
      }
    },
    {
      name: "role",
      title: "Role Assignment",
      description: "Provides the Role Assignment capabilities.",
      priority: 1,
      defaults: {
        handler: ["after"],
        method: ["create"],
        priority: 1,
        name: "role",
        title: "Role Assignment"
      },
      access: { handler: false, method: false }
    },
    {
      name: "resetpass",
      title: "Reset Password",
      description: "Provides a way to reset a password field.",
      defaults: {
        handler: ["after", "before"],
        method: ["form", "create"],
        priority: 0,
        name: "resetpass",
        title: "Reset Password"
      },
      access: { handler: false, method: false }
    },
    {
      name: "save",
      title: "Save Submission",
      description: "Saves the submission into the database.",
      priority: 10,
      defaults: {
        handler: ["before"],
        method: ["create", "update"],
        priority: 10,
        name: "save",
        title: "Save Submission"
      },
      access: { handler: false, method: false }
    },
    {
      name: "login",
      title: "Login",
      description: "Provides a way to login to the application.",
      priority: 2,
      defaults: {
        handler: ["before"],
        method: ["create"],
        priority: 2,
        name: "login",
        title: "Login"
      },
      access: { handler: false, method: false }
    },
    {
      name: "office365contact",
      title: "Office 365 Contacts (Premium)",
      description: "Allows you to integrate into your Office 365 Contacts.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create", "update", "delete"],
        priority: 0,
        name: "office365contact",
        title: "Office 365 Contacts (Premium)"
      },
      premium: true
    },
    {
      name: "office365calendar",
      title: "Office 365 Calendar (Premium)",
      description: "Allows you to integrate into your Office 365 Calendar.",
      premium: true,
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create", "update", "delete"],
        priority: 0,
        name: "office365calendar",
        title: "Office 365 Calendar (Premium)"
      }
    },
    {
      name: "hubspotContact",
      title: "Hubspot Contact (Premium)",
      description: "Allows you to change contact fields in hubspot.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create"],
        priority: 0,
        name: "hubspotContact",
        title: "Hubspot Contact (Premium)"
      },
      premium: true
    },
    {
      name: "oauth",
      title: "OAuth (Premium)",
      description: "Provides OAuth authentication behavior to this form.",
      priority: 20,
      defaults: {
        handler: ["after"],
        method: ["form", "create"],
        priority: 20,
        name: "oauth",
        title: "OAuth (Premium)"
      },
      premium: true
    },
    {
      name: "ldap",
      title: "LDAP Login (Premium)",
      description: "Provides ldap login.",
      priority: 3,
      defaults: {
        handler: ["before"],
        method: ["create"],
        priority: 3,
        name: "ldap",
        title: "LDAP Login (Premium)"
      },
      premium: true
    },
    {
      name: "googlesheet",
      title: "Google Sheets (Premium)",
      description: "Allows you to integrate data into Google sheets.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create", "update", "delete"],
        priority: 0,
        name: "googlesheet",
        title: "Google Sheets (Premium)"
      },
      premium: true
    },
    {
      name: "sqlconnector",
      title: "SQL Connector (Premium)",
      description: "Allows you to execute a remote SQL Query via Resquel.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create", "update", "delete"],
        priority: 0,
        name: "sqlconnector",
        title: "SQL Connector (Premium)"
      },
      premium: true
    },
    {
      name: "jira",
      title: "Jira (Premium)",
      description: "Allows you to create issues within Jira.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create", "update", "delete"],
        priority: 0,
        name: "jira",
        title: "Jira (Premium)"
      },
      premium: true
    },
    {
      name: "group",
      title: "Group Assignment (Premium)",
      premium: true,
      description: "Provides the Group Assignment capabilities.",
      priority: 5,
      defaults: {
        handler: ["after"],
        method: ["create", "update", "delete"],
        priority: 5,
        name: "group",
        title: "Group Assignment (Premium)"
      },
      access: { handler: false, method: false }
    },
    {
      name: "twilioSMS",
      title: "Twilio SMS (Premium)",
      premium: true,
      description: "Allows you to send SMS to phone numbers.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create"],
        priority: 0,
        name: "twilioSMS",
        title: "Twilio SMS (Premium)"
      }
    }
  ].map(({ name, title }) => ({
    label: title,
    value: name
  })),
  data: [
    {
      _id: "602967600685b2158b24e99a",
      handler: ["before"],
      method: ["create", "update"],
      priority: 10,
      name: "save",
      title: "Save Submission",
      form: "602967600685b24dbe24e999",
      machineName: "tcspjwhsevrzpcd:testForm:save"
    }
  ],
  operations: [
    {
      title: "Edit",
      action: "edit",
      alias: "row",
      path: "/resources/:resourceId/submissions/:submissionId",
      icon: "edit",
      permissionsResolver() {
        return true;
      }
    },
    {
      action: "delete",
      path: "/resources/:resourceId/submissions/:submissionId/delete",
      icon: "trash",
      buttonType: "danger",
      permissionsResolver() {
        return true;
      }
    }
  ]
};
