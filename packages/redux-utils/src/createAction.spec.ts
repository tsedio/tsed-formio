import { createAction } from "./createAction";

describe("createAction", () => {
  it("should create an action with default name", () => {
    const action1 = createAction();
    const action2 = createAction();

    expect(action1.toString()).toContain("ACTION:");
    expect(action1.toString()).not.toEqual(action2.toString());

    expect(action1("name")).toEqual({
      name: "name",
      payload: undefined,
      type: "ACTION:0"
    });
  });

  it("should create an action with name", () => {
    const action1 = createAction({ type: "test" });

    expect(action1.toString()).toContain("test");

    expect(action1("name", {})).toEqual({
      name: "name",
      payload: {},
      type: "test"
    });
  });

  it("should create an action with name (mapper)", () => {
    const action1 = createAction({
      type: "test",
      mapper(arg1, arg2) {
        return {
          arg1,
          arg2
        };
      }
    });

    expect(action1.toString()).toContain("test");
    expect(action1("name", "arg1", "arg2")).toEqual({
      name: "name",
      payload: {
        arg1: "arg1",
        arg2: "arg2"
      },
      type: "test"
    });
  });
});
