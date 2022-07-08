import { Formio } from "formiojs";

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

jest.mock("formiojs/Formio");
jest.mock("../action-info");

describe("Action actions", () => {
  beforeEach(() => {
    (getActionInfo as any).mockReturnValue({ type: "actionInfo" });
  });
  afterEach(() => jest.resetAllMocks());
  describe("getAction", () => {
    it("should get action", async () => {
      const formId = "formId";
      const actionId = "actionId";
      const dispatch = jest.fn();

      (Formio.prototype.loadAction as any).mockReturnValue({
        _id: actionId,
        name: "oidc"
      });

      await getAction(formId, actionId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: requestAction.toString(),
        name: "action"
      });
      expect(Formio).toHaveBeenCalledWith("/formId/action/actionId");
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
      const dispatch = jest.fn();

      (Formio.prototype.saveAction as any).mockReturnValue({
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
      expect(Formio).toHaveBeenCalledWith("/formId/action");
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
      const dispatch = jest.fn();

      await deleteAction(formId, actionId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: clearActionError.toString(),
        name: "action"
      });
      expect(Formio).toHaveBeenCalledWith("/formId/action/actionId");
      expect(Formio.prototype.deleteAction).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith({
        type: resetAction.toString(),
        name: "action"
      });
    });
  });
});
