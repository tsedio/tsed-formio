import { Formio } from "@formio/js";

import { getActionInfo, receiveActionInfo, requestActionInfo } from "./action-info.actions";

vi.mock("@formio/js", async (originalImport) => {
  return {
    ...(await originalImport()),
    Formio: class {
      static url: string;

      constructor(public url: string) {
        (Formio as any).url = url;
      }

      static getProjectUrl() {
        return "http://localhost";
      }

      actionInfo() {}
    }
  };
});

describe("ActionInfo actions", () => {
  describe("getAction", () => {
    it("should get action", async () => {
      const formId = "formId";
      const actionType = "oidc";
      const dispatch = vi.fn();

      vi.spyOn(Formio.prototype, "actionInfo").mockReturnValue({
        _id: "actionId",
        name: "oidc",
        settingsForm: {
          action: "/action"
        }
      });

      await getActionInfo(formId, actionType)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: requestActionInfo.toString(),
        name: "actionInfo"
      });
      expect((Formio as any).url).toEqual("http://localhost/formId");
      expect(Formio.prototype.actionInfo).toHaveBeenCalledWith("oidc");
      expect(dispatch).toHaveBeenCalledWith({
        type: receiveActionInfo.toString(),
        name: "actionInfo",
        payload: {
          actionInfo: {
            _id: "actionId",
            name: "oidc",
            settingsForm: {
              action: "http://localhost/action"
            }
          }
        }
      });
    });
  });
});
