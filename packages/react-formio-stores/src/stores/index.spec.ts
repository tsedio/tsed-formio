import { defaultFormioReducer } from "./index";

describe("defaultFormioReducer", () => {
  it("should return initial state", () => {
    const state = Object.entries(defaultFormioReducer).reduce((state, [key, reduce]) => {
      return {
        ...state,
        [key]: reduce(undefined, {} as any)
      };
    }, {});

    expect(state).toEqual({
      action: {
        data: {},
        error: null,
        isActive: false,
        name: "action"
      },
      actionInfo: {
        data: {},
        error: null,
        isActive: false,
        name: "actionInfo"
      },
      actions: {
        availableActions: [],
        data: [],
        error: null,
        isActive: false,
        name: "actions"
      },
      auth: {
        authenticated: false,
        error: null,
        formAccess: {},
        forms: {},
        init: false,
        is: {},
        isActive: false,
        name: "auth",
        projectAccess: {},
        roles: {},
        submissionAccess: {},
        user: null
      },
      form: {
        data: {},
        error: null,
        id: "",
        isActive: false,
        lastUpdated: 0,
        name: "form",
        url: ""
      },
      forms: {
        data: [],
        error: null,
        isActive: false,
        name: "forms",
        parameters: {
          filters: [],
          pageCount: 0,
          pageIndex: 0,
          pageSize: 10,
          query: {
            type: "form"
          },
          select: "",
          sortBy: []
        }
      },
      resource: {
        data: {},
        error: null,
        id: "",
        isActive: false,
        lastUpdated: 0,
        name: "resource",
        url: ""
      },
      resources: {
        data: [],
        error: null,
        isActive: false,
        name: "resources",
        parameters: {
          filters: [],
          pageCount: 0,
          pageIndex: 0,
          pageSize: 10,
          query: {
            type: "resource"
          },
          select: "",
          sortBy: []
        }
      },
      submission: {
        data: {},
        error: null,
        formId: "",
        id: "",
        isActive: false,
        lastUpdated: 0,
        name: "submission",
        url: ""
      },
      submissions: {
        data: [],
        error: null,
        formId: "",
        isActive: false,
        name: "submissions",
        parameters: {
          pageCount: 0,
          pageIndex: 0,
          pageSize: 10,
          query: {},
          select: "",
          sortBy: []
        }
      }
    });
  });
});
