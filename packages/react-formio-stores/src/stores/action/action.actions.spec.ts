import { Formio } from "@formio/js";

import { getActionInfo } from "../action-info";
import {
  clearActionError,
  deleteAction,
  getAction,
  receiveAction,
  requestAction,
  resetAction,
  saveAction,
  sendAction
} from "./action.actions";

vi.mock("@formio/js", async (originalImport) => {
  return {
    ...(await originalImport()),
    Formio: class {
      static url: string;
      constructor(public url: string) {
        (Formio as any).url = url;
      }
      static getProjectUrl() {}
      loadAction() {
        return;
      }
      saveAction() {}
      deleteAction() {}
    }
  };
});
vi.mock("../action-info");

describe("Action actions", () => {
  beforeEach(() => {
    (getActionInfo as any).mockReturnValue({ type: "actionInfo" });
  });
  afterEach(() => vi.resetAllMocks());
  describe("getAction", () => {
    it("should get action", async () => {
      const formId = "formId";
      const actionId = "actionId";
      const dispatch = vi.fn();

      vi.spyOn(Formio.prototype, "loadAction").mockReturnValue({
        _id: actionId,
        name: "oidc"
      });

      await getAction(formId, actionId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: requestAction.toString(),
        name: "action"
      });
      expect((Formio as any).url).toEqual("/formId/action/actionId");
      expect(Formio.prototype.loadAction).toHaveBeenCalledWith();
      expect(getActionInfo).toHaveBeenCalledWith("formId", "oidc");
      expect(dispatch).toHaveBeenCalledWith({ type: "actionInfo" });
      expect(dispatch).toHaveBeenCalledWith({
        type: receiveAction.toString(),
        name: "action",
        payload: {
          action: {
            _id: actionId,
            name: "oidc"
          }
        }
      });
    });
  });
  describe("saveAction", () => {
    it("should save action", async () => {
      const formId = "formId";
      const actionId = "actionId";
      const dispatch = vi.fn();

      vi.spyOn(Formio.prototype, "saveAction").mockReturnValue({
        _id: actionId
      });

      await saveAction(formId, { _id: actionId })(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: clearActionError.toString(),
        name: "action"
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: sendAction.toString(),
        name: "action",
        payload: {
          action: { _id: actionId }
        }
      });
      expect((Formio as any).url).toEqual("/formId/action");
      expect(Formio.prototype.saveAction).toHaveBeenCalledWith({
        _id: actionId
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: receiveAction.toString(),
        name: "action",
        payload: {
          action: {
            _id: actionId
          }
        }
      });
    });
  });
  describe("deleteAction", () => {
    it("should delete action", async () => {
      const formId = "formId";
      const actionId = "actionId";
      const dispatch = vi.fn();

      vi.spyOn(Formio.prototype, "deleteAction");

      await deleteAction(formId, actionId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: clearActionError.toString(),
        name: "action"
      });
      expect((Formio as any).url).toEqual("/formId/action/actionId");
      expect(Formio.prototype.deleteAction).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        type: resetAction.toString(),
        name: "action"
      });
    });
  });
});
