import { swapElements } from "./swapElements";

describe("swapElements", () => {
  it("should swap elements in array", () => {
    expect(swapElements([1, 2, 3, 4, 5], 1, 3)).toEqual([1, 4, 3, 2, 5]);
  });
});
