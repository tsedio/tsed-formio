import React from "react";
import { Sandbox } from "./select.stories";
import { fireEvent, render, screen } from "@testing-library/react";

describe("select component", () => {
  it("should render the select component", () => {
    const { getByTestId } = render(<Sandbox {...Sandbox.args} name={"test"} />);

    expect(getByTestId("select_test")).toBeInTheDocument();
  });

  it("should render select options with 'Placeholder test' as fisrt value", () => {
    const choices = [
      { label: "test1", value: "value1" },
      { label: "test2", value: "value2" }
    ];
    const myPlaceholder = "Placeholder test";

    const { getByTestId, getByText } = render(
      <Sandbox
        {...Sandbox.args}
        placeholder={myPlaceholder}
        choices={choices}
        name={"test"}
      />
    );
    const selectOptions = Array.prototype.map.call(
      getByTestId("select_test").children,
      (label) => label.textContent
    );

    expect(getByTestId("select_test").firstChild.textContent).toBe(
      myPlaceholder
    );
    selectOptions.map((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("should have Placeholder label as selected option by default", () => {
    const choices = [
      { label: "test1", value: "value1" },
      { label: "test2", value: "value2" }
    ];
    const myPlaceholder = "Placeholder test";

    const { getByTestId, getAllByTestId } = render(
      <Sandbox
        {...Sandbox.args}
        placeholder={myPlaceholder}
        choices={choices}
        name={"test"}
      />
    );

    const selectedElement = Array.prototype.find.call(
      getAllByTestId("select-option"),
      (option) => {
        return option.selected === true;
      }
    ).textContent;

    expect(selectedElement).toEqual(myPlaceholder);
  });

  it("should change the value of the selected option when you click on another choice ", () => {
    const choices = [
      { label: "test1", value: "value1" },
      { label: "test2", value: "value2" }
    ];
    const myPlaceholder = "Placeholder test";

    const { getByTestId, getAllByTestId } = render(
      <Sandbox
        {...Sandbox.args}
        placeholder={myPlaceholder}
        choices={choices}
        name={"test"}
      />
    );

    fireEvent.change(getByTestId("select_test"), {
      target: { value: "value1" }
    });
    let selectedElement = Array.prototype.find.call(
      getAllByTestId("select-option"),
      (option) => {
        return option.selected === true;
      }
    ).textContent;
    expect(selectedElement).toEqual("test1");

    fireEvent.change(getByTestId("select_test"), {
      target: { value: "value2" }
    });
    selectedElement = Array.prototype.find.call(
      getAllByTestId("select-option"),
      (option) => {
        return option.selected === true;
      }
    ).textContent;

    expect(selectedElement).toEqual("test2");
  });
});
