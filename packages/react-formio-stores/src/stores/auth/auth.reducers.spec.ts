import {
  failUser,
  formAccessUser,
  logoutUser,
  projectAccessUser,
  receiveUser,
  requestUser,
  submissionAccessUser,
  userForms,
  userRoles
} from "./auth.actions";
import { AUTH } from "./auth.constant";
import { authReducer } from "./auth.reducers";

describe("Auth reducer", () => {
  it("should return state (requestUser)", () => {
    const payload = {};

    expect(
      authReducer(undefined, {
        type: requestUser.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
      authenticated: false,
      error: null,
      formAccess: {},
      forms: {},
      init: true,
      is: {},
      isActive: true,
      name: "auth",
      projectAccess: {},
      roles: {},
      submissionAccess: false,
      user: null
    });
  });
  it("should return state (receiveUser)", () => {
    const payload = {
      user: {
        _id: "id"
      }
    };

    expect(
      authReducer(undefined, {
        type: receiveUser.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
      authenticated: true,
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
      user: {
        _id: "id"
      }
    });
  });
  it("should return state (failUser)", () => {
    const payload = {
      error: {}
    };

    expect(
      authReducer(undefined, {
        type: failUser.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
      authenticated: false,
      error: {},
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
    });
  });
  it("should return state (logoutUser)", () => {
    const payload = {};
    const state: any = {
      authenticated: true,
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
      user: {
        _id: "id"
      }
    };

    expect(
      authReducer(state, {
        type: logoutUser.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
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
    });
  });
  it("should return state (submissionAccessUser)", () => {
    const payload = {
      submissionAccess: {
        sub: {}
      }
    };
    const state: any = {
      authenticated: true,
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
      user: {
        _id: "id"
      }
    };

    expect(
      authReducer(state, {
        type: submissionAccessUser.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
      authenticated: true,
      error: null,
      formAccess: {},
      forms: {},
      init: false,
      is: {},
      isActive: false,
      name: "auth",
      projectAccess: {},
      roles: {},
      submissionAccess: {
        sub: {}
      },
      user: {
        _id: "id"
      }
    });
  });
  it("should return state (formAccessUser)", () => {
    const payload = {
      formAccess: {
        sub: {}
      }
    };
    const state: any = {
      authenticated: true,
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
      user: {
        _id: "id"
      }
    };

    expect(
      authReducer(state, {
        type: formAccessUser.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
      authenticated: true,
      error: null,
      formAccess: {
        sub: {}
      },
      forms: {},
      init: false,
      is: {},
      isActive: false,
      name: "auth",
      projectAccess: {},
      roles: {},
      submissionAccess: {},
      user: {
        _id: "id"
      }
    });
  });
  it("should return state (userForms)", () => {
    const payload = {
      forms: {
        sub: {}
      }
    };
    const state: any = {
      authenticated: true,
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
      user: {
        _id: "id"
      }
    };

    expect(
      authReducer(state, {
        type: userForms.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
      authenticated: true,
      error: null,
      formAccess: {},
      forms: {
        sub: {}
      },
      init: false,
      is: {},
      isActive: false,
      name: "auth",
      projectAccess: {},
      roles: {},
      submissionAccess: {},
      user: {
        _id: "id"
      }
    });
  });
  it("should return state (projectAccessUser)", () => {
    const payload = {
      projectAccess: {
        sub: {}
      }
    };
    const state: any = {
      authenticated: true,
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
      user: {
        _id: "id"
      }
    };

    expect(
      authReducer(state, {
        type: projectAccessUser.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
      authenticated: true,
      error: null,
      formAccess: {},
      forms: {},
      init: false,
      is: {},
      isActive: false,
      name: "auth",
      projectAccess: {
        sub: {}
      },
      roles: {},
      submissionAccess: {},
      user: {
        _id: "id"
      }
    });
  });
  it("should return state (userRoles)", () => {
    const payload = {
      roles: {
        sub: {}
      }
    };
    const state: any = {
      authenticated: true,
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
      user: {
        _id: "id"
      }
    };

    expect(
      authReducer(state, {
        type: userRoles.toString(),
        payload,
        name: AUTH
      })
    ).toEqual({
      authenticated: true,
      error: null,
      formAccess: {},
      forms: {},
      init: false,
      is: {},
      isActive: false,
      name: "auth",
      projectAccess: {},
      roles: {
        sub: {}
      },
      submissionAccess: {},
      user: {
        _id: "id"
      }
    });
  });
});
