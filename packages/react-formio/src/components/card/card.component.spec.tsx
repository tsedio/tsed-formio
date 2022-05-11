import { render } from "@testing-library/react";
import { Sandbox } from "./card.stories";

describe("Card", () => {
  it("should render the card component", () => {
    const { getByRole } = render(<Sandbox {...Sandbox.args} />);

    const title = getByRole("heading");
    const body = getByRole("article");

    expect(title).toHaveTextContent("label");
    expect(body).toHaveTextContent("test");
  });
});
