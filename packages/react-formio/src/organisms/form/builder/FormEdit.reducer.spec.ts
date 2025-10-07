import cloneDeep from "lodash/cloneDeep";
import { describe, expect, it } from "vitest";

import type { FormType } from "../../../interfaces";
import { createInitialState, type FormEditState, hasChanged, reducer } from "./FormEdit.reducer";

const baseForm = (): Partial<FormType> => ({
  title: "My Form",
  name: "myForm",
  path: "myform",
  display: "form",
  components: []
});

describe("FormEdit.reducer helpers", () => {
  it("hasChanged: returns false when objects are equal", () => {
    const a = baseForm();
    const b = cloneDeep(a);

    expect(hasChanged(a, b)).toBe(false);
  });

  it("hasChanged: returns true when objects differ", () => {
    const a = baseForm();
    const b = { ...a, title: "Other" };

    expect(hasChanged(a, b)).toBe(true);
  });

  it("createInitialState: initializes with clones and empty history", () => {
    const form = baseForm();
    const state = createInitialState({ form });

    expect(state.past).toEqual([]);
    expect(state.future).toEqual([]);
    expect(state.current).toEqual(form);
    expect(state.original).toEqual(form);

    // ensure deep clone (different references)
    expect(state.current).not.toBe(form);
    expect(state.original).not.toBe(form);
  });
});

describe("FormEdit.reducer", () => {
  const initState = (form: Partial<FormType> = baseForm()): FormEditState => createInitialState({ form });

  it("formChange: updates state and pushes previous current into past when changed", () => {
    const state = initState();
    const next = reducer(state, { type: "formChange", value: { title: "Updated" } });

    expect(next.current.title).toBe("Updated");
    expect(next.past).toHaveLength(1);
    expect(next.past[0]).toEqual(state.current);
  });

  it("formChange: updates name and path from title when no _id is set", () => {
    const form = { ...baseForm(), _id: undefined } as any;
    const state = initState(form);

    const next = reducer(state, { type: "formChange", value: { title: "My New Title" } });

    expect(next.current.title).toBe("My New Title");
    // name/path should be derived from title via camelCase
    expect(next.current.name).toBe("myNewTitle");
    expect(next.current.path).toBe("mynewtitle");
  });

  it("formChange: does nothing when value has no changes", () => {
    const state = initState();
    const next = reducer(state, { type: "formChange", value: {} });

    // state reference should be unchanged (no history push)
    expect(next).toBe(state);
  });

  it("undo: reverts to previous state and moves current to future", () => {
    let state = initState();
    state = reducer(state, { type: "formChange", value: { title: "Step1" } });
    state = reducer(state, { type: "formChange", value: { title: "Step2" } });

    const afterUndo = reducer(state, { type: "undo" });

    expect(afterUndo.current.title).toBe("Step1");
    expect(afterUndo.future).toHaveLength(1);
    expect(afterUndo.future[0].title).toBe("Step2");
    expect(afterUndo.past).toHaveLength(1); // original current stored
  });

  it("redo: reapplies next state and moves current back to past", () => {
    let state = initState();
    state = reducer(state, { type: "formChange", value: { title: "Step1" } });
    state = reducer(state, { type: "formChange", value: { title: "Step2" } });
    state = reducer(state, { type: "undo" });

    const afterRedo = reducer(state, { type: "redo" });

    expect(afterRedo.current.title).toBe("Step2");
    expect(afterRedo.past).toHaveLength(2); // original + step1
    expect(afterRedo.future).toHaveLength(0);
  });

  it("reset: restores original form and adds current to past", () => {
    // Ensure current has an _id so reset doesn't try to derive name/path from undefined action value
    const state0 = initState({ ...baseForm(), _id: "123" } as any);
    const state1 = reducer(state0, { type: "formChange", value: { title: "Changed" } });

    const reset = reducer(state1, { type: "reset" });

    expect(reset.current).toEqual(state0.original);
    expect(reset.past).toHaveLength(2); // initial current, then changed
  });

  it("replaceForm: replaces current and original, clears history", () => {
    let state = initState();
    state = reducer(state, { type: "formChange", value: { title: "Changed" } });

    const newForm: Partial<FormType> = { title: "Another", name: "another", path: "another", components: [] };
    const replaced = reducer(state, { type: "replaceForm", value: newForm });

    expect(replaced.current).toEqual(newForm);
    expect(replaced.original).toEqual(newForm);
    expect(replaced.past).toEqual([]);
    expect(replaced.future).toEqual([]);
  });

  it("undo on empty past and redo on empty future: no changes", () => {
    const state = initState();

    const afterUndo = reducer(state, { type: "undo" });
    expect(afterUndo).toBe(state);

    const afterRedo = reducer(state, { type: "redo" });
    expect(afterRedo).toBe(state);
  });
});
