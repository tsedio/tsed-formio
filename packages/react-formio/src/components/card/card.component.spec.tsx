import { render, screen } from "@testing-library/react";

import { Sandbox } from "./card.stories";

describe("Card", () => {
  it("should render the card component", () => {
    render(<Sandbox {...Sandbox.args} />);

    const title = screen.getByRole("heading");
    const body = screen.getByRole("article");

    expect(title).toHaveTextContent("label");
    expect(body).toHaveTextContent("test");
  });
});
