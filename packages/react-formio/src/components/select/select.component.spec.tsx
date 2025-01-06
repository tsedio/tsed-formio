import { fireEvent, render, screen } from "@testing-library/react";

import { Choicesjs, Sandbox } from "./select.stories";

describe("Select", () => {
  describe("select component Usage version", () => {
    it("should render the select component", () => {
      render(<Sandbox {...Sandbox.args} name={"test-sandbox"} />);

      expect(screen.getByTestId("select_test-sandbox")).toBeInTheDocument();
    });

    it("should render the select component with a different size", () => {
      render(<Sandbox {...Sandbox.args} size='small' name={"test-sandbox"} />);
      const select = screen.getByTestId("select_test-sandbox");
      expect(select).toBeInTheDocument();
      expect(select).toHaveClass("form-control-small");
    });

    it("should render select options with 'Placeholder test' as first value", () => {
      const choices = [
        { label: "test1", value: "value1" },
        { label: "test2", value: "value2" }
      ];

      const placeHolderTest = "Placeholder test";

      render(<Sandbox {...Sandbox.args} placeholder={placeHolderTest} choices={choices} name={"test-sandbox"} />);

      expect(screen.getByRole("option", { name: "Placeholder test" })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "test1" })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "test2" })).toBeInTheDocument();
    });

    it("should have Placeholder label as selected option by default", () => {
      const choices = [
        { label: "test1", value: "value1" },
        { label: "test2", value: "value2" }
      ];
      const placeHolderTest = "Placeholder test";

      render(<Sandbox {...Sandbox.args} placeholder={placeHolderTest} choices={choices} name={"test-sandbox"} />);
      const option = screen.getByRole("option", { name: placeHolderTest }) as HTMLOptionElement;

      expect(option.selected).toBeTruthy();
    });

    it("should change the value of the selected option when you click on another choice", () => {
      const choices = [
        { label: "test1", value: "value1" },
        { label: "test2", value: "value2" }
      ];
      const placeHolderTest = "Placeholder test";
      const onChange = vi.fn();

      render(<Sandbox {...Sandbox.args} placeholder={placeHolderTest} choices={choices} name={"test-sandbox"} onChange={onChange} />);

      fireEvent.change(screen.getByTestId("select_test-sandbox"), {
        target: { value: "value1" }
      });

      const option = screen.getByRole("option", { name: "test1" }) as HTMLOptionElement;

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

      render(
        <Choicesjs {...Choicesjs.args} layout={"choicesjs"} choices={choices} placeholder={placeHolderTest} name={"test-choicesjs"} />
      );

      expect(screen.getByRole("option", { name: "test1" })).toBeInTheDocument();
    });
  });
});
