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
    access: { handler: false, method: false },
    settingsForm: {
      components: [
        { type: "hidden", input: true, key: "priority" },
        {
          type: "hidden",
          input: true,
          key: "name"
        },
        { type: "textfield", input: true, label: "Title", key: "title" },
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
                  form: "602967600685b24dbe24e999",
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
                            json: '[{"key":""},{"label":"Title","placeholder":"Enter the form title","tableView":true,"validate":{"required":true,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false,"minLength":"","maxLength":"","pattern":""},"key":"title","type":"textfield","input":true,"hideOnChildrenHidden":false,"prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","modalEdit":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"widget":{"type":"input"},"attributes":{},"validateOn":"change","conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"mask":false,"inputType":"text","inputFormat":"plain","inputMask":"","spellcheck":true,"id":"esheb5o"},{"label":"Name","labelPosition":"top","placeholder":"Enter the form machine name","description":"","tooltip":"","prefix":"","suffix":"","widget":{"type":"input"},"inputMask":"","allowMultipleMasks":false,"customClass":"","tabindex":"","autocomplete":"","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","protected":false,"dbIndex":false,"case":"","encrypted":false,"redrawOn":"","clearOnHide":true,"customDefaultValue":"","calculateValue":"value = _.camelCase(data.title)","calculateServer":false,"allowCalculateOverride":false,"validateOn":"change","validate":{"required":true,"pattern":"","customMessage":"","custom":"","customPrivate":false,"json":"","minLength":"","maxLength":"","strictDateValidation":false,"multiple":false,"unique":false},"unique":false,"errorLabel":"","key":"name","tags":[],"properties":{},"conditional":{"show":null,"when":null,"eq":"","json":""},"customConditional":"","logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"textfield","input":true,"hideOnChildrenHidden":false,"refreshOn":"","inputType":"text","id":"eaqup3","defaultValue":""},{"label":"Display as","widget":"choicesjs","tableView":true,"data":{"values":[{"label":"Form","value":"form"},{"label":"Wizard","value":"wizard"}],"json":"","url":"","resource":"","custom":""},"selectThreshold":0.3,"key":"display","type":"select","indexeddb":{"filter":{}},"input":true,"hideOnChildrenHidden":false,"defaultValue":"form","placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"refreshOn":"","redrawOn":"","modalEdit":false,"labelPosition":"top","description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","calculateServer":false,"attributes":{},"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false,"strictDateValidation":false,"multiple":false,"unique":false},"conditional":{"show":null,"when":null,"eq":""},"overlay":{"style":"","left":"","top":"","width":"","height":""},"allowCalculateOverride":false,"encrypted":false,"showCharCount":false,"showWordCount":false,"properties":{},"allowMultipleMasks":false,"idPath":"id","clearOnRefresh":false,"limit":100,"dataSrc":"values","valueProperty":"","lazyLoad":true,"filter":"","searchEnabled":true,"searchField":"","minSearch":0,"readOnlyValue":false,"authenticate":false,"template":"<span>{{ item.label }}</span>","selectFields":"","searchThreshold":0.3,"uniqueOptions":false,"fuseOptions":{"include":"score","threshold":0.3},"customOptions":{},"useExactSearch":false,"id":"e490elx"},{"label":"Path","labelPosition":"top","placeholder":"example","description":"","tooltip":"","prefix":"https://host.fr/","suffix":"","widget":{"type":"input"},"inputMask":"","allowMultipleMasks":false,"customClass":"","tabindex":"","autocomplete":"","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","protected":false,"dbIndex":false,"case":"","encrypted":false,"redrawOn":"","clearOnHide":true,"customDefaultValue":"","calculateValue":"data = _camelCase(data.title).toLowerCase()","calculateServer":false,"allowCalculateOverride":false,"validateOn":"change","validate":{"required":false,"pattern":"","customMessage":"","custom":"","customPrivate":false,"json":"","minLength":"","maxLength":"","strictDateValidation":false,"multiple":false,"unique":false},"unique":false,"errorLabel":"","key":"path","tags":[],"properties":{},"conditional":{"show":null,"when":null,"eq":"","json":""},"customConditional":"","logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"textfield","input":true,"hideOnChildrenHidden":false,"refreshOn":"","inputType":"text","id":"e0jl1y","defaultValue":""},{"label":"Tags","labelPosition":"top","placeholder":"","description":"","tooltip":"","customClass":"","tabindex":"","hidden":false,"hideLabel":false,"autofocus":false,"disabled":false,"tableView":false,"modalEdit":false,"delimeter":",","maxTags":0,"storeas":"string","persistent":true,"protected":false,"dbIndex":false,"encrypted":false,"redrawOn":"","clearOnHide":true,"customDefaultValue":"","calculateValue":"","calculateServer":false,"allowCalculateOverride":false,"validate":{"required":false,"customMessage":"","custom":"","customPrivate":false,"json":"","strictDateValidation":false,"multiple":false,"unique":false},"unique":false,"validateOn":"change","errorLabel":"","key":"tags","tags":[],"properties":{},"conditional":{"show":null,"when":null,"eq":"","json":""},"customConditional":"","logic":[],"attributes":{},"overlay":{"style":"","page":"","left":"","top":"","width":"","height":""},"type":"tags","input":true,"prefix":"","suffix":"","multiple":false,"refreshOn":"","widget":{"type":"input"},"showCharCount":false,"showWordCount":false,"allowMultipleMasks":false,"id":"eacpmkv","hideOnChildrenHidden":false,"defaultValue":null}]'
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
                              { value: "", label: "" },
                              {
                                value: "equals",
                                label: "Equals"
                              },
                              { value: "notEqual", label: "Does Not Equal" }
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
                                  label: "Form settings",
                                  columns: [
                                    {
                                      components: [
                                        {
                                          label: "Title",
                                          placeholder: "Enter the form title",
                                          tableView: true,
                                          validate: {
                                            required: true,
                                            custom: "",
                                            customPrivate: false,
                                            strictDateValidation: false,
                                            multiple: false,
                                            unique: false,
                                            minLength: "",
                                            maxLength: "",
                                            pattern: ""
                                          },
                                          key: "title",
                                          type: "textfield",
                                          input: true,
                                          hideOnChildrenHidden: false,
                                          prefix: "",
                                          customClass: "",
                                          suffix: "",
                                          multiple: false,
                                          defaultValue: null,
                                          protected: false,
                                          unique: false,
                                          persistent: true,
                                          hidden: false,
                                          clearOnHide: true,
                                          refreshOn: "",
                                          redrawOn: "",
                                          modalEdit: false,
                                          labelPosition: "top",
                                          description: "",
                                          errorLabel: "",
                                          tooltip: "",
                                          hideLabel: false,
                                          tabindex: "",
                                          disabled: false,
                                          autofocus: false,
                                          dbIndex: false,
                                          customDefaultValue: "",
                                          calculateValue: "",
                                          calculateServer: false,
                                          widget: { type: "input" },
                                          attributes: {},
                                          validateOn: "change",
                                          conditional: {
                                            show: null,
                                            when: null,
                                            eq: ""
                                          },
                                          overlay: {
                                            style: "",
                                            left: "",
                                            top: "",
                                            width: "",
                                            height: ""
                                          },
                                          allowCalculateOverride: false,
                                          encrypted: false,
                                          showCharCount: false,
                                          showWordCount: false,
                                          properties: {},
                                          allowMultipleMasks: false,
                                          mask: false,
                                          inputType: "text",
                                          inputFormat: "plain",
                                          inputMask: "",
                                          spellcheck: true,
                                          id: "esheb5o"
                                        }
                                      ],
                                      width: 4,
                                      offset: 0,
                                      push: 0,
                                      pull: 0,
                                      size: "sm"
                                    },
                                    {
                                      components: [
                                        {
                                          label: "Name",
                                          labelPosition: "top",
                                          placeholder:
                                            "Enter the form machine name",
                                          description: "",
                                          tooltip: "",
                                          prefix: "",
                                          suffix: "",
                                          widget: { type: "input" },
                                          inputMask: "",
                                          allowMultipleMasks: false,
                                          customClass: "",
                                          tabindex: "",
                                          autocomplete: "",
                                          hidden: false,
                                          hideLabel: false,
                                          showWordCount: false,
                                          showCharCount: false,
                                          mask: false,
                                          autofocus: false,
                                          spellcheck: true,
                                          disabled: false,
                                          tableView: true,
                                          modalEdit: false,
                                          multiple: false,
                                          persistent: true,
                                          inputFormat: "plain",
                                          protected: false,
                                          dbIndex: false,
                                          case: "",
                                          encrypted: false,
                                          redrawOn: "",
                                          clearOnHide: true,
                                          customDefaultValue: "",
                                          calculateValue:
                                            "value = _.camelCase(data.title)",
                                          calculateServer: false,
                                          allowCalculateOverride: false,
                                          validateOn: "change",
                                          validate: {
                                            required: true,
                                            pattern: "",
                                            customMessage: "",
                                            custom: "",
                                            customPrivate: false,
                                            json: "",
                                            minLength: "",
                                            maxLength: "",
                                            strictDateValidation: false,
                                            multiple: false,
                                            unique: false
                                          },
                                          unique: false,
                                          errorLabel: "",
                                          key: "name",
                                          tags: [],
                                          properties: {},
                                          conditional: {
                                            show: null,
                                            when: null,
                                            eq: "",
                                            json: ""
                                          },
                                          customConditional: "",
                                          logic: [],
                                          attributes: {},
                                          overlay: {
                                            style: "",
                                            page: "",
                                            left: "",
                                            top: "",
                                            width: "",
                                            height: ""
                                          },
                                          type: "textfield",
                                          input: true,
                                          hideOnChildrenHidden: false,
                                          refreshOn: "",
                                          inputType: "text",
                                          id: "eaqup3",
                                          defaultValue: ""
                                        }
                                      ],
                                      width: 4,
                                      offset: 0,
                                      push: 0,
                                      pull: 0,
                                      size: "sm"
                                    },
                                    {
                                      components: [
                                        {
                                          label: "Display as",
                                          widget: "choicesjs",
                                          tableView: true,
                                          data: {
                                            values: [
                                              { label: "Form", value: "form" },
                                              {
                                                label: "Wizard",
                                                value: "wizard"
                                              }
                                            ],
                                            json: "",
                                            url: "",
                                            resource: "",
                                            custom: ""
                                          },
                                          selectThreshold: 0.3,
                                          key: "display",
                                          type: "select",
                                          indexeddb: { filter: {} },
                                          input: true,
                                          hideOnChildrenHidden: false,
                                          defaultValue: "form",
                                          placeholder: "",
                                          prefix: "",
                                          customClass: "",
                                          suffix: "",
                                          multiple: false,
                                          protected: false,
                                          unique: false,
                                          persistent: true,
                                          hidden: false,
                                          clearOnHide: true,
                                          refreshOn: "",
                                          redrawOn: "",
                                          modalEdit: false,
                                          labelPosition: "top",
                                          description: "",
                                          errorLabel: "",
                                          tooltip: "",
                                          hideLabel: false,
                                          tabindex: "",
                                          disabled: false,
                                          autofocus: false,
                                          dbIndex: false,
                                          customDefaultValue: "",
                                          calculateValue: "",
                                          calculateServer: false,
                                          attributes: {},
                                          validateOn: "change",
                                          validate: {
                                            required: false,
                                            custom: "",
                                            customPrivate: false,
                                            strictDateValidation: false,
                                            multiple: false,
                                            unique: false
                                          },
                                          conditional: {
                                            show: null,
                                            when: null,
                                            eq: ""
                                          },
                                          overlay: {
                                            style: "",
                                            left: "",
                                            top: "",
                                            width: "",
                                            height: ""
                                          },
                                          allowCalculateOverride: false,
                                          encrypted: false,
                                          showCharCount: false,
                                          showWordCount: false,
                                          properties: {},
                                          allowMultipleMasks: false,
                                          idPath: "id",
                                          clearOnRefresh: false,
                                          limit: 100,
                                          dataSrc: "values",
                                          valueProperty: "",
                                          lazyLoad: true,
                                          filter: "",
                                          searchEnabled: true,
                                          searchField: "",
                                          minSearch: 0,
                                          readOnlyValue: false,
                                          authenticate: false,
                                          template:
                                            "<span>{{ item.label }}</span>",
                                          selectFields: "",
                                          searchThreshold: 0.3,
                                          uniqueOptions: false,
                                          fuseOptions: {
                                            include: "score",
                                            threshold: 0.3
                                          },
                                          customOptions: {},
                                          useExactSearch: false,
                                          id: "e490elx"
                                        }
                                      ],
                                      size: "sm",
                                      width: 4,
                                      offset: 0,
                                      push: 0,
                                      pull: 0
                                    },
                                    {
                                      components: [
                                        {
                                          label: "Path",
                                          labelPosition: "top",
                                          placeholder: "example",
                                          description: "",
                                          tooltip: "",
                                          prefix: "https://host.fr/",
                                          suffix: "",
                                          widget: { type: "input" },
                                          inputMask: "",
                                          allowMultipleMasks: false,
                                          customClass: "",
                                          tabindex: "",
                                          autocomplete: "",
                                          hidden: false,
                                          hideLabel: false,
                                          showWordCount: false,
                                          showCharCount: false,
                                          mask: false,
                                          autofocus: false,
                                          spellcheck: true,
                                          disabled: false,
                                          tableView: true,
                                          modalEdit: false,
                                          multiple: false,
                                          persistent: true,
                                          inputFormat: "plain",
                                          protected: false,
                                          dbIndex: false,
                                          case: "",
                                          encrypted: false,
                                          redrawOn: "",
                                          clearOnHide: true,
                                          customDefaultValue: "",
                                          calculateValue:
                                            "data = _camelCase(data.title).toLowerCase()",
                                          calculateServer: false,
                                          allowCalculateOverride: false,
                                          validateOn: "change",
                                          validate: {
                                            required: false,
                                            pattern: "",
                                            customMessage: "",
                                            custom: "",
                                            customPrivate: false,
                                            json: "",
                                            minLength: "",
                                            maxLength: "",
                                            strictDateValidation: false,
                                            multiple: false,
                                            unique: false
                                          },
                                          unique: false,
                                          errorLabel: "",
                                          key: "path",
                                          tags: [],
                                          properties: {},
                                          conditional: {
                                            show: null,
                                            when: null,
                                            eq: "",
                                            json: ""
                                          },
                                          customConditional: "",
                                          logic: [],
                                          attributes: {},
                                          overlay: {
                                            style: "",
                                            page: "",
                                            left: "",
                                            top: "",
                                            width: "",
                                            height: ""
                                          },
                                          type: "textfield",
                                          input: true,
                                          hideOnChildrenHidden: false,
                                          refreshOn: "",
                                          inputType: "text",
                                          id: "e0jl1y",
                                          defaultValue: ""
                                        }
                                      ],
                                      size: "sm",
                                      width: 4,
                                      offset: 0,
                                      push: 0,
                                      pull: 0
                                    },
                                    {
                                      components: [
                                        {
                                          label: "Tags",
                                          labelPosition: "top",
                                          placeholder: "",
                                          description: "",
                                          tooltip: "",
                                          customClass: "",
                                          tabindex: "",
                                          hidden: false,
                                          hideLabel: false,
                                          autofocus: false,
                                          disabled: false,
                                          tableView: false,
                                          modalEdit: false,
                                          delimeter: ",",
                                          maxTags: 0,
                                          storeas: "string",
                                          persistent: true,
                                          protected: false,
                                          dbIndex: false,
                                          encrypted: false,
                                          redrawOn: "",
                                          clearOnHide: true,
                                          customDefaultValue: "",
                                          calculateValue: "",
                                          calculateServer: false,
                                          allowCalculateOverride: false,
                                          validate: {
                                            required: false,
                                            customMessage: "",
                                            custom: "",
                                            customPrivate: false,
                                            json: "",
                                            strictDateValidation: false,
                                            multiple: false,
                                            unique: false
                                          },
                                          unique: false,
                                          validateOn: "change",
                                          errorLabel: "",
                                          key: "tags",
                                          tags: [],
                                          properties: {},
                                          conditional: {
                                            show: null,
                                            when: null,
                                            eq: "",
                                            json: ""
                                          },
                                          customConditional: "",
                                          logic: [],
                                          attributes: {},
                                          overlay: {
                                            style: "",
                                            page: "",
                                            left: "",
                                            top: "",
                                            width: "",
                                            height: ""
                                          },
                                          type: "tags",
                                          input: true,
                                          prefix: "",
                                          suffix: "",
                                          multiple: false,
                                          refreshOn: "",
                                          widget: { type: "input" },
                                          showCharCount: false,
                                          showWordCount: false,
                                          allowMultipleMasks: false,
                                          id: "eacpmkv",
                                          hideOnChildrenHidden: false,
                                          defaultValue: null
                                        }
                                      ],
                                      size: "md",
                                      width: 4,
                                      offset: 0,
                                      push: 0,
                                      pull: 0
                                    }
                                  ],
                                  autoAdjust: false,
                                  hideOnChildrenHidden: false,
                                  customClass: "",
                                  hidden: false,
                                  hideLabel: true,
                                  modalEdit: false,
                                  key: "formSettings",
                                  tags: [],
                                  properties: {},
                                  conditional: {
                                    show: null,
                                    when: null,
                                    eq: "",
                                    json: ""
                                  },
                                  customConditional: "",
                                  logic: [],
                                  attributes: {},
                                  overlay: {
                                    style: "",
                                    page: "",
                                    left: "",
                                    top: "",
                                    width: "",
                                    height: ""
                                  },
                                  type: "columns",
                                  input: false,
                                  tableView: false,
                                  placeholder: "",
                                  prefix: "",
                                  suffix: "",
                                  multiple: false,
                                  defaultValue: null,
                                  protected: false,
                                  unique: false,
                                  persistent: false,
                                  clearOnHide: false,
                                  refreshOn: "",
                                  redrawOn: "",
                                  labelPosition: "top",
                                  description: "",
                                  errorLabel: "",
                                  tooltip: "",
                                  tabindex: "",
                                  disabled: false,
                                  autofocus: false,
                                  dbIndex: false,
                                  customDefaultValue: "",
                                  calculateValue: "",
                                  calculateServer: false,
                                  widget: null,
                                  validateOn: "change",
                                  validate: {
                                    required: false,
                                    custom: "",
                                    customPrivate: false,
                                    strictDateValidation: false,
                                    multiple: false,
                                    unique: false
                                  },
                                  allowCalculateOverride: false,
                                  encrypted: false,
                                  showCharCount: false,
                                  showWordCount: false,
                                  allowMultipleMasks: false,
                                  tree: false,
                                  id: "eso5bqq"
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
      action:
        "/project/5d0797bc872fc7d140559857/form/602967600685b24dbe24e999/action"
    }
  },
  options: { template: "tailwind", iconset: "bx" }
};
