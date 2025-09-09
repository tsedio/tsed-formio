import "../../../molecules/card/Card.js";
import "../Form.js";

import { Meta, StoryObj } from "@storybook/react";

import { FormAction } from "./FormAction.js";

/**
 * FormAction component displays a form for configuring form action
 *
 * ```tsx
 *  import {FormAction} from "@tsed/react-formio/organisms/form/action/FormAction";
 * ```
 */
export default {
  title: "form/action/FormAction",
  component: FormAction,
  argTypes: {
    actionInfo: {
      description: "Information about the action including defaults and settings form",
      control: "object"
    },
    submission: {
      description: "Submission data to fill the form",
      control: "object"
    },
    onSubmit: {
      action: "onSubmit",
      description: "Callback when the form is submitted"
    },
    options: {
      description: "Form options",
      control: "object"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Component that displays a form for configuring form actions such as save, email, webhook, etc."
      }
    }
  }
} satisfies Meta<typeof FormAction>;

type Story = StoryObj<typeof FormAction>;

/**
 * Basic save action configuration
 */
export const SaveAction: Story = {
  args: {
    actionInfo: {
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
      access: {
        handler: false,
        method: false
      },
      settingsForm: {
        components: [
          {
            type: "hidden",
            input: true,
            key: "priority"
          },
          {
            type: "hidden",
            input: true,
            key: "name"
          },
          {
            type: "textfield",
            input: true,
            label: "Title",
            key: "title"
          },
          {
            type: "fieldset",
            input: false,
            tree: true,
            legend: "Action Settings",
            components: [
              {
                input: false,
                type: "container",
                key: "settings",
                components: [
                  {
                    type: "resourcefields",
                    key: "resource",
                    title: "Save submission to",
                    placeholder: "This form",
                    basePath: "/project/5d0797bc872fc7d140559857/form",
                    form: "62b18b10fbbba513555c6c5e",
                    required: false
                  }
                ]
              }
            ]
          },
          {
            type: "fieldset",
            input: false,
            tree: false,
            key: "conditions",
            legend: "Action Execution",
            components: [
              {
                type: "select",
                input: true,
                key: "handler",
                label: "Handler",
                placeholder: "Select which handler(s) you would like to trigger",
                dataSrc: "json",
                data: {
                  json: '[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'
                },
                template: "<span>{{ item.title }}</span>",
                valueProperty: "name",
                multiple: true
              },
              {
                type: "select",
                input: true,
                label: "Methods",
                key: "method",
                placeholder: "Trigger action on method(s)",
                dataSrc: "json",
                data: {
                  json: '[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'
                },
                template: "<span>{{ item.title }}</span>",
                valueProperty: "name",
                multiple: true
              }
            ]
          },
          {
            type: "button",
            input: true,
            label: "Save Action",
            key: "submit",
            size: "md",
            action: "submit",
            disableOnInvalid: true,
            theme: "primary"
          }
        ]
      }
    },
    options: { template: "tailwind", iconset: "bx" }
  }
};

/**
 * Email action configuration
 */
export const EmailAction: Story = {
  args: {
    actionInfo: {
      name: "email",
      title: "Email",
      description: "Sends an email when a form is submitted.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create"],
        priority: 0,
        name: "email",
        title: "Email"
      },
      access: {
        handler: false,
        method: false
      },
      settingsForm: {
        components: [
          {
            type: "hidden",
            input: true,
            key: "priority"
          },
          {
            type: "hidden",
            input: true,
            key: "name"
          },
          {
            type: "textfield",
            input: true,
            label: "Title",
            key: "title"
          },
          {
            type: "fieldset",
            input: false,
            tree: true,
            legend: "Email Settings",
            components: [
              {
                type: "textfield",
                input: true,
                label: "From",
                key: "from",
                placeholder: "no-reply@example.com",
                defaultValue: "no-reply@example.com",
                multiple: false
              },
              {
                type: "textfield",
                input: true,
                label: "To",
                key: "to",
                placeholder: "user@example.com",
                multiple: true
              },
              {
                type: "textfield",
                input: true,
                label: "Subject",
                key: "subject",
                placeholder: "New submission for {{ form.title }}",
                defaultValue: "New submission for {{ form.title }}"
              },
              {
                type: "textarea",
                input: true,
                label: "Message",
                key: "message",
                placeholder: "{{ submission.data }}",
                defaultValue: "{{ submission.data }}",
                rows: 5
              }
            ]
          },
          {
            type: "fieldset",
            input: false,
            tree: false,
            key: "conditions",
            legend: "Action Execution",
            components: [
              {
                type: "select",
                input: true,
                key: "handler",
                label: "Handler",
                placeholder: "Select which handler(s) you would like to trigger",
                dataSrc: "json",
                data: {
                  json: '[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'
                },
                template: "<span>{{ item.title }}</span>",
                valueProperty: "name",
                multiple: true
              },
              {
                type: "select",
                input: true,
                label: "Methods",
                key: "method",
                placeholder: "Trigger action on method(s)",
                dataSrc: "json",
                data: {
                  json: '[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'
                },
                template: "<span>{{ item.title }}</span>",
                valueProperty: "name",
                multiple: true
              }
            ]
          },
          {
            type: "button",
            input: true,
            label: "Save Action",
            key: "submit",
            size: "md",
            action: "submit",
            disableOnInvalid: true,
            theme: "primary"
          }
        ]
      }
    },
    options: { template: "tailwind", iconset: "bx" }
  }
};

/**
 * Webhook action configuration
 */
export const WebhookAction: Story = {
  args: {
    actionInfo: {
      name: "webhook",
      title: "Webhook",
      description: "Sends a submission to a URL.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create", "update"],
        priority: 0,
        name: "webhook",
        title: "Webhook"
      },
      access: {
        handler: false,
        method: false
      },
      settingsForm: {
        components: [
          {
            type: "hidden",
            input: true,
            key: "priority"
          },
          {
            type: "hidden",
            input: true,
            key: "name"
          },
          {
            type: "textfield",
            input: true,
            label: "Title",
            key: "title"
          },
          {
            type: "fieldset",
            input: false,
            tree: true,
            legend: "Webhook Settings",
            components: [
              {
                type: "textfield",
                input: true,
                label: "URL",
                key: "url",
                placeholder: "https://example.com/webhook",
                multiple: false
              },
              {
                type: "select",
                input: true,
                label: "Method",
                key: "webhookMethod",
                placeholder: "Select HTTP method",
                dataSrc: "values",
                data: {
                  values: [
                    { label: "POST", value: "post" },
                    { label: "PUT", value: "put" },
                    { label: "PATCH", value: "patch" }
                  ]
                },
                defaultValue: "post"
              }
            ]
          },
          {
            type: "fieldset",
            input: false,
            tree: false,
            key: "conditions",
            legend: "Action Execution",
            components: [
              {
                type: "select",
                input: true,
                key: "handler",
                label: "Handler",
                placeholder: "Select which handler(s) you would like to trigger",
                dataSrc: "json",
                data: {
                  json: '[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'
                },
                template: "<span>{{ item.title }}</span>",
                valueProperty: "name",
                multiple: true
              },
              {
                type: "select",
                input: true,
                label: "Methods",
                key: "method",
                placeholder: "Trigger action on method(s)",
                dataSrc: "json",
                data: {
                  json: '[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'
                },
                template: "<span>{{ item.title }}</span>",
                valueProperty: "name",
                multiple: true
              }
            ]
          },
          {
            type: "button",
            input: true,
            label: "Save Action",
            key: "submit",
            size: "md",
            action: "submit",
            disableOnInvalid: true,
            theme: "primary"
          }
        ]
      }
    },
    options: { template: "tailwind", iconset: "bx" }
  }
};
