import { render } from "@testing-library/react";
import { Sandbox } from "./loader.stories";
describe("Loader", () => {
  it("should render a component (when isActive = true)", () => {
    const { getByTestId } = render(<Sandbox isActive={true} />);

    const icon = getByTestId("icon_radio-circle");

    expect(icon).toBeTruthy();
    expect(icon).toBeInTheDocument();
  });

  it("should render a component (when isActive = false)", () => {
    const { queryByTestId } = render(<Sandbox isActive={false} />);

    const icon = queryByTestId("icon_radio-circle");

    expect(icon).toBeFalsy();
    expect(icon).not.toBeInTheDocument();
  });
});
