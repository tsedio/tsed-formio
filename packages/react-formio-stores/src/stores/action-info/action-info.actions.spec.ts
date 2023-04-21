import { Formio } from "formiojs";

import { getActionInfo, receiveActionInfo, requestActionInfo } from "./action-info.actions";

jest.mock("formiojs/Formio");

describe("ActionInfo actions", () => {
  describe("getAction", () => {
    it("should get action", async () => {
      const formId = "formId";
      const actionType = "oidc";
      const dispatch = jest.fn();

      (Formio.getProjectUrl as any).mockReturnValue("http://localhost");
      (Formio.prototype.actionInfo as any).mockReturnValue({
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
      expect(Formio).toHaveBeenCalledWith("http://localhost/formId");
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
