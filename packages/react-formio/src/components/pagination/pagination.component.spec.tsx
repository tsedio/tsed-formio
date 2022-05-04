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
    let page: number;

    const { container, queryAllByTestId } = render(
      <Sandbox gotoPage={gotoPageSpy} {...Sandbox.args} />
    );
    const wrappersBtn = container.getElementsByClassName("page-item");
    const paginationBtn = queryAllByTestId("pagination-button");

    const buttonsPage = paginationBtn.filter(
      (btn) => btn.textContent !== "Previous" && btn.textContent !== "Next"
    );

    expect(
      Array.prototype.every.call(wrappersBtn, (wrap) =>
        wrap.classList.contains("active")
      )
    ).toBeFalsy();
    expect(
      Array.prototype.every.call(wrappersBtn, (wrap) =>
        wrap.classList.contains("disabled")
      )
    ).toBeFalsy();
    expect(
      Array.prototype.some.call(wrappersBtn, (wrap) =>
        wrap.classList.contains("active")
      )
    ).toBeTruthy();
    expect(
      Array.prototype.some.call(wrappersBtn, (wrap) =>
        wrap.classList.contains("disabled")
      )
    ).toBeTruthy();

    buttonsPage.forEach((btn) => {
      if (btn.textContent !== "...") {
        // indexPage = buttonsPage.indexOf(btn);
        page = +btn.textContent;

        fireEvent.click(btn);
        expect(gotoPageSpy).toHaveBeenCalled();
        expect(gotoPageSpy).toHaveBeenCalledWith(page - 1);
      }
    });
  });
});
