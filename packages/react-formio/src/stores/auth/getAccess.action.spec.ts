import { Formio } from "formiojs";
import {
  formAccessUser,
  submissionAccessUser,
  userForms,
  userRoles
} from "./auth.actions";
import { USER_AUTH } from "./auth.constant";
import { getAccess } from "./getAccess.action";

jest.mock("./auth.actions");

describe("getAccess()", () => {
  beforeEach(() => {
    jest.spyOn(Formio, "makeStaticRequest");
    jest.spyOn(Formio, "getProjectUrl");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should get access", async () => {
    const dispatch = jest.fn();
    const access = {
      roles: {
        administrator: {
          _id: "6016dd751c62ca370d59f0b8",
          default: false,
          admin: true,
          title: "Administrator"
        },
        authenticated: {
          _id: "6016dd751c62ca370d59f0b9",
          default: false,
          admin: false,
          title: "Authenticated"
        },
        anonymous: {
          _id: "6016dd751c62ca370d59f0ba",
          default: true,
          admin: false,
          title: "Anonymous"
        }
      },
      forms: {
        user: {
          _id: "6016e1fb4ce825382505947d",
          title: "User",
          name: "user",
          path: "user",
          access: [
            {
              roles: [
                "6016dd751c62ca370d59f0ba",
                "6016dd751c62ca370d59f0b9",
                "6016dd751c62ca370d59f0b8"
              ],
              type: "read_all"
            }
          ],
          submissionAccess: [
            { roles: ["6016dd751c62ca370d59f0b8"], type: "create_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "read_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "update_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "delete_all" },
            { roles: [], type: "create_own" },
            { roles: [], type: "read_own" },
            { roles: [], type: "update_own" },
            { roles: [], type: "delete_own" }
          ]
        },
        admin: {
          _id: "6016e1fb4ce825382505947e",
          title: "Admin",
          name: "admin",
          path: "admin",
          access: [
            {
              roles: [
                "6016dd751c62ca370d59f0ba",
                "6016dd751c62ca370d59f0b9",
                "6016dd751c62ca370d59f0b8"
              ],
              type: "read_all"
            }
          ],
          submissionAccess: [
            { roles: ["6016dd751c62ca370d59f0b8"], type: "create_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "read_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "update_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "delete_all" },
            { roles: [], type: "create_own" },
            { roles: [], type: "read_own" },
            { roles: [], type: "update_own" },
            { roles: [], type: "delete_own" }
          ]
        },
        todo: {
          _id: "6016e1fb4ce825382505947f",
          title: "ToDo",
          name: "todo",
          path: "todo",
          access: [
            {
              roles: [
                "6016dd751c62ca370d59f0b8",
                "6016dd751c62ca370d59f0b9",
                "6016dd751c62ca370d59f0ba"
              ],
              type: "read_all"
            }
          ],
          submissionAccess: [
            { roles: [], type: "create_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "read_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "update_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "delete_all" },
            { roles: ["6016dd751c62ca370d59f0b9"], type: "create_own" },
            { roles: ["6016dd751c62ca370d59f0b9"], type: "read_own" },
            { roles: ["6016dd751c62ca370d59f0b9"], type: "update_own" },
            { roles: ["6016dd751c62ca370d59f0b9"], type: "delete_own" }
          ]
        }
      }
    };

    (Formio.makeStaticRequest as any).mockResolvedValue(access);

    await getAccess(dispatch);

    expect(Formio.getProjectUrl).toHaveBeenCalledWith();
    expect(Formio.makeStaticRequest).toHaveBeenCalledWith(
      "https://api.form.io/access"
    );

    expect(submissionAccessUser).toHaveBeenCalledWith(USER_AUTH, {
      submissionAccess: {
        admin: {
          create_all: ["6016dd751c62ca370d59f0b8"],
          create_own: [],
          delete_all: ["6016dd751c62ca370d59f0b8"],
          delete_own: [],
          read_all: ["6016dd751c62ca370d59f0b8"],
          read_own: [],
          update_all: ["6016dd751c62ca370d59f0b8"],
          update_own: []
        },
        todo: {
          create_all: [],
          create_own: ["6016dd751c62ca370d59f0b9"],
          delete_all: ["6016dd751c62ca370d59f0b8"],
          delete_own: ["6016dd751c62ca370d59f0b9"],
          read_all: ["6016dd751c62ca370d59f0b8"],
          read_own: ["6016dd751c62ca370d59f0b9"],
          update_all: ["6016dd751c62ca370d59f0b8"],
          update_own: ["6016dd751c62ca370d59f0b9"]
        },
        user: {
          create_all: ["6016dd751c62ca370d59f0b8"],
          create_own: [],
          delete_all: ["6016dd751c62ca370d59f0b8"],
          delete_own: [],
          read_all: ["6016dd751c62ca370d59f0b8"],
          read_own: [],
          update_all: ["6016dd751c62ca370d59f0b8"],
          update_own: []
        }
      }
    });
    expect(formAccessUser).toHaveBeenCalledWith(USER_AUTH, {
      formAccess: {
        admin: {
          read_all: [
            "6016dd751c62ca370d59f0ba",
            "6016dd751c62ca370d59f0b9",
            "6016dd751c62ca370d59f0b8"
          ]
        },
        todo: {
          read_all: [
            "6016dd751c62ca370d59f0b8",
            "6016dd751c62ca370d59f0b9",
            "6016dd751c62ca370d59f0ba"
          ]
        },
        user: {
          read_all: [
            "6016dd751c62ca370d59f0ba",
            "6016dd751c62ca370d59f0b9",
            "6016dd751c62ca370d59f0b8"
          ]
        }
      }
    });
    expect(userRoles).toHaveBeenCalledWith(USER_AUTH, {
      roles: {
        administrator: {
          _id: "6016dd751c62ca370d59f0b8",
          admin: true,
          default: false,
          title: "Administrator"
        },
        anonymous: {
          _id: "6016dd751c62ca370d59f0ba",
          admin: false,
          default: true,
          title: "Anonymous"
        },
        authenticated: {
          _id: "6016dd751c62ca370d59f0b9",
          admin: false,
          default: false,
          title: "Authenticated"
        }
      }
    });
    expect(userForms).toHaveBeenCalledWith(USER_AUTH, {
      forms: {
        admin: {
          _id: "6016e1fb4ce825382505947e",
          access: [
            {
              roles: [
                "6016dd751c62ca370d59f0ba",
                "6016dd751c62ca370d59f0b9",
                "6016dd751c62ca370d59f0b8"
              ],
              type: "read_all"
            }
          ],
          name: "admin",
          path: "admin",
          submissionAccess: [
            { roles: ["6016dd751c62ca370d59f0b8"], type: "create_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "read_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "update_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "delete_all" },
            { roles: [], type: "create_own" },
            { roles: [], type: "read_own" },
            { roles: [], type: "update_own" },
            { roles: [], type: "delete_own" }
          ],
          title: "Admin"
        },
        todo: {
          _id: "6016e1fb4ce825382505947f",
          access: [
            {
              roles: [
                "6016dd751c62ca370d59f0b8",
                "6016dd751c62ca370d59f0b9",
                "6016dd751c62ca370d59f0ba"
              ],
              type: "read_all"
            }
          ],
          name: "todo",
          path: "todo",
          submissionAccess: [
            { roles: [], type: "create_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "read_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "update_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "delete_all" },
            { roles: ["6016dd751c62ca370d59f0b9"], type: "create_own" },
            { roles: ["6016dd751c62ca370d59f0b9"], type: "read_own" },
            { roles: ["6016dd751c62ca370d59f0b9"], type: "update_own" },
            { roles: ["6016dd751c62ca370d59f0b9"], type: "delete_own" }
          ],
          title: "ToDo"
        },
        user: {
          _id: "6016e1fb4ce825382505947d",
          access: [
            {
              roles: [
                "6016dd751c62ca370d59f0ba",
                "6016dd751c62ca370d59f0b9",
                "6016dd751c62ca370d59f0b8"
              ],
              type: "read_all"
            }
          ],
          name: "user",
          path: "user",
          submissionAccess: [
            { roles: ["6016dd751c62ca370d59f0b8"], type: "create_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "read_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "update_all" },
            { roles: ["6016dd751c62ca370d59f0b8"], type: "delete_all" },
            { roles: [], type: "create_own" },
            { roles: [], type: "read_own" },
            { roles: [], type: "update_own" },
            { roles: [], type: "delete_own" }
          ],
          title: "User"
        }
      }
    });
  });
});
