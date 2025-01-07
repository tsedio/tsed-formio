import { render, screen } from "@testing-library/react";

import { Card } from "./Card";
import { Sandbox } from "./Card.stories";

describe("Card", () => {
  it("should render the card component", () => {
    render(<Card {...Sandbox.args} />);

    const title = screen.getByRole("heading");
    const body = screen.getByRole("article");

    expect(title).toHaveTextContent("label");
    expect(body).toHaveTextContent("test");
  });
});
