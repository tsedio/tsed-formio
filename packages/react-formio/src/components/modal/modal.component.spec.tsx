import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { WithFooter, WithTitle } from "./modal.stories";

describe("Modal", () => {
  describe("WithTitle", () => {
    it("should display the modal when we click on the button", async () => {
      const onClose = jest.fn();

      const { queryByTestId, getByTestId } = render(
        <WithTitle {...WithTitle.args} onClose={onClose} />
      );

      expect(queryByTestId("modalTitle")).toBeFalsy();
      expect(queryByTestId("modalBody")).toBeFalsy();
      expect(queryByTestId("modalFooter")).toBeFalsy();

      fireEvent.click(screen.getByRole("openModal"));

      await waitFor(() => getByTestId("modalTitle"));

      expect(getByTestId("modalTitle")).toBeTruthy();
      expect(getByTestId("modalTitle")).toHaveTextContent("Modal title");
      expect(getByTestId("modalBody")).toBeTruthy();
      expect(getByTestId("modalBody")).toHaveTextContent("Hello body");
      expect(queryByTestId("modalFooter")).toBeFalsy();

      fireEvent.click(screen.getByTestId("closeModal"));

      expect(queryByTestId("modalTitle")).toBeFalsy();
      expect(queryByTestId("modalBody")).toBeFalsy();
      expect(queryByTestId("modalFooter")).toBeFalsy();
      expect(onClose).toHaveBeenCalledWith();
    });
  });

  describe("WithFooter", () => {
    it("should display the modal when we click on the button", async () => {
      const { getByRole, queryByTestId, getByTestId } = render(
        <WithFooter {...WithFooter.args} />
      );

      expect(queryByTestId("modalTitle")).toBeFalsy();
      expect(queryByTestId("modalBody")).toBeFalsy();
      expect(queryByTestId("modalFooter")).toBeFalsy();

      fireEvent.click(getByRole("openModal"));

      await waitFor(() => getByTestId("modalTitle"));

      expect(getByTestId("modalTitle")).toBeTruthy();
      expect(getByTestId("modalTitle")).toHaveTextContent("Modal title");
      expect(getByTestId("modalBody")).toBeTruthy();
      expect(getByTestId("modalBody")).toHaveTextContent("Hello body");
      expect(queryByTestId("modalFooter")).toBeTruthy();

      fireEvent.click(screen.getByTestId("customCloseModal"));

      expect(queryByTestId("modalTitle")).toBeFalsy();
      expect(queryByTestId("modalBody")).toBeFalsy();
      expect(queryByTestId("modalFooter")).toBeFalsy();
    });
    it("should call the onSubmit listener", async () => {
      const onSubmit = jest.fn();
      const { getByRole, queryByTestId, getByTestId } = render(
        <WithFooter {...WithFooter.args} onSubmit={onSubmit} />
      );

      fireEvent.click(getByRole("openModal"));

      await waitFor(() => getByTestId("modalTitle"));

      fireEvent.click(screen.getByTestId("customSubmitModal"));

      expect(onSubmit).toHaveBeenCalled();
      expect(queryByTestId("modalTitle")).toBeFalsy();
      expect(queryByTestId("modalBody")).toBeFalsy();
      expect(queryByTestId("modalFooter")).toBeFalsy();
    });
  });
});
