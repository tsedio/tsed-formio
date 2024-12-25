import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Sandbox } from "./pagination.stories";

describe("Pagination", () => {
  it("should render the pagination component", () => {
    render(<Sandbox {...Sandbox.args} />);

    const paginationBtn = screen.queryAllByTestId("pagination-button");
    const allBtnBlocks = paginationBtn.map((bloc) => bloc.textContent);
    const select = screen.getByTestId("select_page");

    paginationBtn.forEach((child) => expect(child).toBeInTheDocument());
    expect(select).toBeInTheDocument();
    expect(allBtnBlocks[0]).toBe("Previous");
    expect(allBtnBlocks[allBtnBlocks.length - 1]).toBe("Next");
  });

  it("should call previousPage() callback", () => {
    const previousPageSpy = jest.fn();
    render(<Sandbox previousPage={previousPageSpy} canPreviousPage={true} />);
    const paginationBtn = screen.queryAllByTestId("pagination-button");
    const btnPreviousPage = paginationBtn.find((btn) => btn.textContent === "Previous");

    fireEvent.click(btnPreviousPage!);

    expect(previousPageSpy).toHaveBeenCalledTimes(1);
  });

  it("should call nextPage() callback", () => {
    const nextPageSpy = jest.fn();
    render(<Sandbox nextPage={nextPageSpy} canNextPage={true} />);

    fireEvent.click(screen.getByText(/Next/i));

    expect(nextPageSpy).toHaveBeenCalledTimes(1);
  });

  it("should call gotoPage() callback when cliking on a button page", () => {
    const gotoPageSpy = jest.fn();
    let page: number;

    render(<Sandbox {...Sandbox.args} gotoPage={gotoPageSpy} />);

    const paginationBtn = screen.queryAllByTestId("pagination-button");
    const buttonsPage = paginationBtn.filter((btn) => btn.textContent !== "Previous" && btn.textContent !== "Next");

    buttonsPage.forEach((btn) => {
      if (btn.textContent !== "...") {
        page = +btn.textContent!;
        fireEvent.click(btn);
        expect(gotoPageSpy).toHaveBeenCalled();
        expect(gotoPageSpy).toHaveBeenCalledWith(page - 1);
      }
    });
  });

  it("should have Previous button disabled and not clickable", () => {
    const previousPageSpy = jest.fn();
    render(<Sandbox canPreviousPage={false} previousPage={previousPageSpy} {...Sandbox.args} />);

    const previousButton = screen.getByText("Previous");

    expect(previousButton).toHaveAttribute("disabled");
    fireEvent.click(previousButton);
    expect(previousPageSpy).not.toHaveBeenCalled();
  });

  it("should have Previous button NOT disabled and clickable", () => {
    const previousPageSpy = jest.fn();
    render(<Sandbox {...Sandbox.args} canPreviousPage={true} previousPage={previousPageSpy} />);

    const previousButton = screen.getByText("Previous");

    expect(previousButton).not.toHaveAttribute("disabled");
    fireEvent.click(previousButton);
    expect(previousPageSpy).toHaveBeenCalled();
  });

  it("should have Next button disabled and not clickable", () => {
    const nextPageSpy = jest.fn();
    render(<Sandbox canNextPage={false} nextPage={nextPageSpy} {...Sandbox.args} />);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toHaveAttribute("disabled");
    fireEvent.click(nextButton);
    expect(nextPageSpy).not.toHaveBeenCalled();
  });

  it("should have Next button NOT disabled and clickable", () => {
    const nextPageSpy = jest.fn();
    render(<Sandbox canNextPage={true} nextPage={nextPageSpy} {...Sandbox.args} />);
    const nextButton = screen.getByText("Next");
    expect(nextButton).not.toHaveAttribute("disabled");
    fireEvent.click(nextButton);
    expect(nextPageSpy).toHaveBeenCalled();
  });

  it("should correctly render select component", () => {
    const pageSizes = [10, 25, 50, 100, 200, 500];

    render(<Sandbox {...Sandbox.args} pageSizes={pageSizes} />);
    const selectComp = screen.getByTestId("select_page");
    const selectChilds = Array.prototype.map.call(selectComp, function (child) {
      return +child.textContent;
    });

    expect(selectComp).toBeInTheDocument();
    expect(selectChilds.length === pageSizes.length).toBeTruthy();
  });

  it("should display total length", () => {
    const pageSizes = [10, 25, 50, 100, 200, 500];

    render(<Sandbox {...Sandbox.args} pageSizes={pageSizes} totalLength={1000} />);

    expect(screen.getByTestId("pagination-total-items")).toHaveTextContent("1,000 items");
  });
});
