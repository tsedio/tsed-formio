import {
  formSettingsToSubmission,
  submissionToFormSettings
} from "./formSettings.utils";

describe("FormSettings utils", () => {
  describe("submissionToDataSettings()", () => {
    it("should map submission to form", () => {
      const result = submissionToFormSettings(
        {
          _id: "id",
          tags: [],
          action: "",
          properties: {}
        },
        {
          data: {
            tags: ["tag"],
            action: "action",
            properties: {
              test: "test"
            }
          }
        }
      );

      expect(result).toEqual({
        _id: "id",
        action: "action",
        properties: {
          test: "test"
        },
        tags: ["tag"]
      });
    });
  });
  describe("formSettingsToSubmission()", () => {
    it("should form to submission", () => {
      const result = formSettingsToSubmission({
        _id: "id",
        action: "action",
        properties: {
          test: "test"
        },
        tags: ["tag"]
      });

      expect(result).toEqual({
        data: {
          action: "action",
          properties: {
            test: "test"
          },
          tags: ["tag"]
        }
      });
    });
  });
});
