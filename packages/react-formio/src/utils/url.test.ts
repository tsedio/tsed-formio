import { getFormUrl, getSubmissionUrl } from "./url";

describe("getUrl", () => {
  describe("getFormUrl()", () => {
    it("should return the url from mongo id", () => {
      expect(getFormUrl("5e455268aed853649e834c4a")).toEqual(
        "https://api.form.io/form/5e455268aed853649e834c4a"
      );
    });
    it("should return the url from alias", () => {
      expect(getFormUrl("admin")).toEqual("https://api.form.io/admin");
    });
    it("should return the url from alias (__)", () => {
      expect(getFormUrl("admin__login")).toEqual(
        "https://api.form.io/admin/login"
      );
    });
  });
  describe("getSubmissionUrl()", () => {
    it("should return the url from mongo id", () => {
      expect(
        getSubmissionUrl("5e455268aed853649e834c4a", "5e455268aed853649e834c42")
      ).toEqual(
        "https://api.form.io/form/5e455268aed853649e834c4a/submission/5e455268aed853649e834c42"
      );
    });
    it("should return the url from alias", () => {
      expect(getSubmissionUrl("admin", "5e455268aed853649e834c42")).toEqual(
        "https://api.form.io/admin/submission/5e455268aed853649e834c42"
      );
    });

    it("should return the url without submissionId", () => {
      expect(getSubmissionUrl("admin")).toEqual(
        "https://api.form.io/admin/submission"
      );
    });
  });
});
