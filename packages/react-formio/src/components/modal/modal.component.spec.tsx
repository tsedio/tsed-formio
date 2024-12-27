import { fireEvent, render, screen } from "@testing-library/react";

import { WithFooter, WithTitle } from "./modal.stories";

describe("Modal", () => {
  describe("WithTitle", () => {
    it("should display the modal when we click on the button", async () => {
      const onClose = vi.fn();

      render(<WithTitle {...WithTitle.args} onClose={onClose} />);

      expect(screen.queryByTestId("modalTitle")).toBeFalsy();
      expect(screen.queryByTestId("modalBody")).toBeFalsy();
      expect(screen.queryByTestId("modalFooter")).toBeFalsy();

      fireEvent.click(screen.getByRole("button", { name: "Open modal" }));

      await screen.findByTestId("modalTitle");

      expect(screen.getByTestId("modalTitle")).toBeTruthy();
      expect(screen.getByTestId("modalTitle")).toHaveTextContent("Modal title");
      expect(screen.getByTestId("modalBody")).toBeTruthy();
      expect(screen.getByTestId("modalBody")).toHaveTextContent("Hello body");
      expect(screen.queryByTestId("modalFooter")).toBeFalsy();

      fireEvent.click(screen.getByTestId("closeModal"));

      expect(screen.queryByTestId("modalTitle")).toBeFalsy();
      expect(screen.queryByTestId("modalBody")).toBeFalsy();
      expect(screen.queryByTestId("modalFooter")).toBeFalsy();
      expect(onClose).toHaveBeenCalledWith();
    });
  });

  describe("WithFooter", () => {
    it("should display the modal when we click on the button", async () => {
      render(<WithFooter {...WithFooter.args} />);

      expect(screen.queryByTestId("modalTitle")).toBeFalsy();
      expect(screen.queryByTestId("modalBody")).toBeFalsy();
      expect(screen.queryByTestId("modalFooter")).toBeFalsy();

      fireEvent.click(screen.getByRole("button", { name: "Open modal" }));

      await screen.findByTestId("modalTitle");

      expect(screen.getByTestId("modalTitle")).toBeTruthy();
      expect(screen.getByTestId("modalTitle")).toHaveTextContent("Modal title");
      expect(screen.getByTestId("modalBody")).toBeTruthy();
      expect(screen.getByTestId("modalBody")).toHaveTextContent("Hello body");
      expect(screen.getByTestId("modalFooter")).toBeTruthy();

      fireEvent.click(screen.getByTestId("customCloseModal"));

      expect(screen.queryByTestId("modalTitle")).toBeFalsy();
      expect(screen.queryByTestId("modalBody")).toBeFalsy();
      expect(screen.queryByTestId("modalFooter")).toBeFalsy();
    });
    it("should call the onSubmit listener", async () => {
      const onSubmit = vi.fn();

      render(<WithFooter {...WithFooter.args} onSubmit={onSubmit} />);

      fireEvent.click(screen.getByRole("button", { name: "Open modal" }));

      await screen.findByTestId("modalTitle");

      fireEvent.click(screen.getByTestId("customSubmitModal"));

      expect(onSubmit).toHaveBeenCalled();
      expect(screen.queryByTestId("modalTitle")).toBeFalsy();
      expect(screen.queryByTestId("modalBody")).toBeFalsy();
      expect(screen.queryByTestId("modalFooter")).toBeFalsy();
    });
  });
});
