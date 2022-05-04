import { render, screen, fireEvent } from "@testing-library/react";
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

  it("should call previousPage() callback", () => {
    const previousPageSpy = jest.fn();
    const { queryAllByTestId } = render(
      <Sandbox previousPage={previousPageSpy} canPreviousPage={true} />
    );
    const paginationBtn = queryAllByTestId("pagination-button");
    const btnPreviousPage = paginationBtn.find(
      (btn) => btn.textContent === "Previous"
    );

    fireEvent.click(btnPreviousPage);

    expect(previousPageSpy).toHaveBeenCalledTimes(1);
  });

  it("should call nextPage() callback", () => {
    const nextPageSpy = jest.fn();
    render(<Sandbox nextPage={nextPageSpy} canNextPage={true} />);

    fireEvent.click(screen.getByText(/Next/i));

    expect(nextPageSpy).toHaveBeenCalledTimes(1);
  });

  it("should call gotoPage() callback", () => {
    const gotoPageSpy = jest.fn();
    const { queryAllByTestId } = render(
      <Sandbox gotoPage={gotoPageSpy} {...Sandbox.args} />
    );
    const paginationBtn = queryAllByTestId("pagination-button");
    const btnPage = paginationBtn.filter(
      (btn) => btn.textContent !== "Previous" && btn.textContent !== "Next"
    );
    btnPage.forEach((btn) => {
      fireEvent.click(btn);
      expect(gotoPageSpy).toHaveBeenCalled();
    });
  });
});
