import { clean } from "./clean";

describe("clean", () => {
  it("should return cleaned object", () => {
    expect(clean({ test: undefined, test2: "" })).toEqual({ test2: "" });
  });
});
