import React from "react";

import { FormAction } from "./formAction.component";

export default {
  title: "ReactFormio/FormAction",
  component: FormAction,
  argTypes: {
    onSubmit: { action: "onSubmit" },

    type: {
      control: {
        type: "object"
      }
    },
    form: {
      control: {
        type: "object"
      }
    },
    options: {
      control: {
        type: "object"
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  }
};

export const Sandbox = (args: any) => {
  return <FormAction {...args} />;
};

Sandbox.args = {
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
          key: "fieldset",
          type: "fieldset",
          input: false,
          tree: false,
          legend: "Action Conditions (optional)",
          components: [
            {
              type: "container",
              key: "condition",
              input: false,
              tree: true,
              components: [
                {
                  key: "columns",
                  type: "columns",
                  input: false,
                  columns: [
                    {
                      components: [
                        {
                          type: "select",
                          input: true,
                          label: "Trigger this action only if field",
                          key: "field",
                          placeholder: "Select the conditional field",
                          template: "<span>{{ item.label || item.key }}</span>",
                          dataSrc: "json",
                          data: {
                            json: '[{"key":""},{"label":"Rules","reorder":false,"addAnotherPosition":"bottom","layoutFixed":false,"enableRowGroups":false,"initEmpty":false,"tableView":false,"defaultValue":[{"path":{},"operator":""}],"key":"rules","type":"datagrid","input":true,"components":[{"label":"Path","widget":"choicesjs","tableView":true,"dataSrc":"url","data":{"url":"/test","headers":[{"key":"","value":""}]},"key":"path","type":"select","input":true,"disableLimit":false},{"label":"Operator","widget":"choicesjs","tableView":true,"data":{"values":[{"label":"default","value":"default"},{"label":"Contains","value":"CONTAINS"}]},"key":"operator","type":"select","input":true},{"customClass":"mt-0 mb-0","key":"fieldset","type":"fieldset","label":"Field Set","input":false,"tableView":false,"components":[{"label":"Value","tableView":true,"key":"value1","customConditional":"show = row.operator === \'CONTAINS\'","type":"textfield","input":true}]},{"label":"Hello","tableView":true,"key":"textField","customConditional":"show = row.operator === \'CONTAINS\'","type":"textfield","input":true}]},{"label":"Path","widget":"choicesjs","tableView":true,"dataSrc":"url","data":{"url":"/test","headers":[{"key":"","value":""}]},"key":"path","type":"select","input":true,"disableLimit":false},{"label":"Operator","widget":"choicesjs","tableView":true,"data":{"values":[{"label":"default","value":"default"},{"label":"Contains","value":"CONTAINS"}]},"key":"operator","type":"select","input":true},{"label":"Value","tableView":true,"key":"value1","customConditional":"show = row.operator === \'CONTAINS\'","type":"textfield","input":true},{"label":"Hello","tableView":true,"key":"textField","customConditional":"show = row.operator === \'CONTAINS\'","type":"textfield","input":true},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false}]'
                          },
                          valueProperty: "key",
                          multiple: false
                        },
                        {
                          type: "select",
                          input: true,
                          label: "",
                          key: "eq",
                          placeholder: "Select comparison",
                          template: "<span>{{ item.label }}</span>",
                          dataSrc: "values",
                          data: {
                            values: [
                              {
                                value: "",
                                label: ""
                              },
                              {
                                value: "equals",
                                label: "Equals"
                              },
                              {
                                value: "notEqual",
                                label: "Does Not Equal"
                              }
                            ],
                            json: "",
                            url: "",
                            resource: ""
                          },
                          valueProperty: "value",
                          multiple: false
                        },
                        {
                          input: true,
                          type: "textfield",
                          inputType: "text",
                          label: "",
                          key: "value",
                          placeholder: "Enter value",
                          multiple: false
                        }
                      ]
                    },
                    {
                      components: [
                        {
                          key: "well2",
                          type: "well",
                          input: false,
                          components: [
                            {
                              key: "html",
                              type: "htmlelement",
                              tag: "h4",
                              input: false,
                              content:
                                'Or you can provide your own custom JavaScript or <a href="http://jsonlogic.com" target="_blank">JSON</a> condition logic here',
                              className: ""
                            },
                            {
                              label: "",
                              type: "textarea",
                              input: true,
                              key: "custom",
                              editorComponents: [
                                {
                                  label: "Rules",
                                  reorder: false,
                                  addAnotherPosition: "bottom",
                                  layoutFixed: false,
                                  enableRowGroups: false,
                                  initEmpty: false,
                                  tableView: false,
                                  defaultValue: [
                                    {
                                      path: {},
                                      operator: ""
                                    }
                                  ],
                                  key: "rules",
                                  type: "datagrid",
                                  input: true,
                                  components: [
                                    {
                                      label: "Path",
                                      widget: "choicesjs",
                                      tableView: true,
                                      dataSrc: "url",
                                      data: {
                                        url: "/test",
                                        headers: [
                                          {
                                            key: "",
                                            value: ""
                                          }
                                        ]
                                      },
                                      key: "path",
                                      type: "select",
                                      input: true,
                                      disableLimit: false
                                    },
                                    {
                                      label: "Operator",
                                      widget: "choicesjs",
                                      tableView: true,
                                      data: {
                                        values: [
                                          {
                                            label: "default",
                                            value: "default"
                                          },
                                          {
                                            label: "Contains",
                                            value: "CONTAINS"
                                          }
                                        ]
                                      },
                                      key: "operator",
                                      type: "select",
                                      input: true
                                    },
                                    {
                                      customClass: "mt-0 mb-0",
                                      key: "fieldset",
                                      type: "fieldset",
                                      label: "Field Set",
                                      input: false,
                                      tableView: false,
                                      components: [
                                        {
                                          label: "Value",
                                          tableView: true,
                                          key: "value1",
                                          customConditional: "show = row.operator === 'CONTAINS'",
                                          type: "textfield",
                                          input: true
                                        }
                                      ]
                                    },
                                    {
                                      label: "Hello",
                                      tableView: true,
                                      key: "textField",
                                      customConditional: "show = row.operator === 'CONTAINS'",
                                      type: "textfield",
                                      input: true
                                    }
                                  ]
                                },
                                {
                                  type: "button",
                                  label: "Submit",
                                  key: "submit",
                                  disableOnInvalid: true,
                                  input: true,
                                  tableView: false
                                }
                              ],
                              placeholder:
                                '// Example: Only execute if submitted roles has \'authenticated\'.\nJavaScript: execute = (data.roles.indexOf(\'authenticated\') !== -1);\nJSON: { "in": [ "authenticated", { "var": "data.roles" } ] }'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          key: "html2",
          type: "htmlelement",
          tag: "hr",
          input: false,
          content: "",
          className: ""
        },
        {
          type: "button",
          input: true,
          label: "Save Action",
          key: "submit",
          size: "md",
          leftIcon: "",
          rightIcon: "",
          block: false,
          action: "submit",
          disableOnInvalid: true,
          theme: "primary"
        }
      ],
      action: "/project/5d0797bc872fc7d140559857/form/62b18b10fbbba513555c6c5e/action"
    }
  },
  options: { template: "tailwind", iconset: "bx" }
};
