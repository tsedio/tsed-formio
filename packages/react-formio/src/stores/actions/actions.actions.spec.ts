import { Formio } from "formiojs";
import {
  getActions,
  receiveActions,
  requestActions,
  resetActions
} from "./actions.actions";

jest.mock("formiojs");

describe("Actions actions", () => {
  describe("getActions", () => {
    it("should return a result", async () => {
      const formId = "formId";
      const actionId = "actionId";
      const dispatch = jest.fn();

      (Formio.prototype.loadActions as any).mockReturnValue([
        {
          _id: actionId,
          name: "oidc"
        }
      ]);
      (Formio.prototype.availableActions as any).mockReturnValue([
        {
          name: "oidc"
        }
      ]);

      await getActions(formId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: resetActions.toString(),
        name: "actions"
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: requestActions.toString(),
        name: "actions"
      });

      expect(Formio).toHaveBeenCalledWith("/formId");
      expect(Formio.prototype.loadActions).toHaveBeenCalledWith({
        params: {}
      });
      expect(Formio.prototype.availableActions).toHaveBeenCalledWith();

      expect(dispatch).toHaveBeenCalledWith({
        type: receiveActions.toString(),
        name: "actions",
        payload: {
          actions: [
            {
              _id: actionId,
              name: "oidc"
            }
          ],
          availableActions: [
            {
              name: "oidc"
            }
          ]
        }
      });
    });
  });
});
