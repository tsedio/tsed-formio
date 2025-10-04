import { Formio } from "@formio/js";

import { getActions, receiveActions, requestActions, resetActions } from "./actions.actions";

vi.mock("@formio/js", async (originalImport) => {
  return {
    ...(await originalImport()),
    Formio: class {
      static url: string;

      constructor(public url: string) {
        (Formio as any).url = url;
      }

      static getProjectUrl() {}
      loadActions() {}
      availableActions() {}
    }
  };
});

describe("Actions actions", () => {
  beforeEach(() => {
    (Formio as any).url = undefined;
  });
  describe("getActions", () => {
    it("should return a result", async () => {
      const formId = "formId";
      const actionId = "actionId";
      const dispatch = vi.fn();

      vi.spyOn(Formio.prototype, "loadActions").mockReturnValue([
        {
          _id: actionId,
          name: "oidc"
        }
      ]);
      vi.spyOn(Formio.prototype, "availableActions").mockReturnValue([
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

      expect((Formio as any).url).toEqual("/formId");
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
