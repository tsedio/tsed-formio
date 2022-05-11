import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Choicesjs, Sandbox } from "./select.stories";

describe("select component Sandbox version", () => {
  it("should render the select component", () => {
    const { getByTestId } = render(
      <Sandbox {...Sandbox.args} name={"test-sandbox"} />
    );

    expect(getByTestId("select_test-sandbox")).toBeInTheDocument();
  });

  it("should render select options with 'Placeholder test' as fisrt value", () => {
    const choices = [
      { label: "test1", value: "value1" },
      { label: "test2", value: "value2" }
    ];
    const placeHolderTest = "Placeholder test";

    const { getAllByTestId, getByText } = render(
      <Sandbox
        {...Sandbox.args}
        placeholder={placeHolderTest}
        choices={choices}
        name={"test-sandbox"}
      />
    );
    const selectOptions = getAllByTestId("select-option").map(
      (label) => label.textContent
    );

    expect(selectOptions[0]).toEqual(placeHolderTest);
    selectOptions.forEach((option) => {
      return expect(getByText(option)).toBeInTheDocument();
    });

    it("should render select options with 'Placeholder test' as first value", () => {
      const choices = [
        { label: "test1", value: "value1" },
        { label: "test2", value: "value2" }
      ];

      const placeHolderTest = "Placeholder test";

      const { getByRole } = render(<Sandbox {...Sandbox.args} placeholder={placeHolderTest} choices={choices} name={"test-sandbox"} />);

      expect(getByRole("option", { name: "Placeholder test" })).toBeInTheDocument();
      expect(getByRole("option", { name: "test1" })).toBeInTheDocument();
      expect(getByRole("option", { name: "test2" })).toBeInTheDocument();
    });

    it("should have Placeholder label as selected option by default", () => {
      const choices = [
        { label: "test1", value: "value1" },
        { label: "test2", value: "value2" }
      ];
      const placeHolderTest = "Placeholder test";

      const { getByRole } = render(<Sandbox {...Sandbox.args} placeholder={placeHolderTest} choices={choices} name={"test-sandbox"} />);
      const option = getByRole("option", { name: placeHolderTest }) as HTMLOptionElement;

      expect(option.selected).toBeTruthy();
    });

    it("should change the value of the selected option when you click on another choice", () => {
      const choices = [
        { label: "test1", value: "value1" },
        { label: "test2", value: "value2" }
      ];
      const placeHolderTest = "Placeholder test";
      const onChange = jest.fn();

      const { getByRole, getByTestId } = render(
        <Sandbox {...Sandbox.args} placeholder={placeHolderTest} choices={choices} name={"test-sandbox"} onChange={onChange} />
      );

      fireEvent.change(getByTestId("select_test-sandbox"), {
        target: { value: "value1" }
      });

      const option = getByRole("option", { name: "test1" }) as HTMLOptionElement;

      expect(option.selected).toBeTruthy();
      expect(onChange).toHaveBeenCalledWith("test-sandbox", "value1");
    });
  });

  describe("select component Choicesjs version", () => {
    it("should render select options with 'test1' as first value", () => {
      const choices = [
        { label: "test1", value: "value1" },
        { label: "test2", value: "value2" }
      ];
      const placeHolderTest = "Placeholder test";

      const { getByRole } = render(
        <Choicesjs {...Choicesjs.args} layout={"choicesjs"} choices={choices} placeholder={placeHolderTest} name={"test-choicesjs"} />
      );

      expect(getByRole("option", { name: "test1" })).toBeInTheDocument();
    });
  });
});
