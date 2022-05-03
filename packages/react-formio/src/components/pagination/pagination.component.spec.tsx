import { render } from "@testing-library/react";
import React from "react";
import { Sandbox } from "./pagination.stories";

describe("Pagination", () => {
  it("should render the pagination component", () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <Sandbox {...Sandbox.args} />
    );
    const paginationBtn = queryAllByTestId("pagination-button");
    const allBtnBlocks = paginationBtn.map((bloc) => bloc.textContent);
    const select = getByTestId("select_page");
    expect(container).toBeInTheDocument();
    paginationBtn.forEach((child) => expect(child).toBeInTheDocument());
    expect(select).toBeInTheDocument();
    expect(allBtnBlocks[0]).toBe("Previous");
    expect(allBtnBlocks[allBtnBlocks.length - 1]).toBe("Next");
  });
});
