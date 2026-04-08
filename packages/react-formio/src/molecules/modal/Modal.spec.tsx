import { fireEvent, render, screen } from "@testing-library/react";

import { Modal, useModal } from "./Modal";

function WithTitle(props: any) {
  const modal = useModal();

  return (
    <div>
      <div>
        <button className={"btn btn-primary"} onClick={modal.openModal}>
          Open modal
        </button>
      </div>
      <Modal {...props} {...modal}>
        <div className={"p-5"} style={{ height: "900px" }}>
          Hello body
        </div>
      </Modal>
    </div>
  );
}

function WithFooter(args: any) {
  const modal = useModal();

  function ModalFooter({ closeModal, onSubmit }: any) {
    return (
      <div className={"flex items-center justify-center bg-white p-2"}>
        <button
          data-testid='customSubmitModal'
          className={"btn btn-primary mx-1"}
          onClick={(e) => {
            onSubmit(e);
            closeModal();
          }}
        >
          Save
        </button>

        <button data-testid='customCloseModal' className={"btn btn-danger mx-1"} onClick={closeModal}>
          Close
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <button className={"btn btn-primary"} onClick={modal.openModal}>
          Open modal
        </button>
      </div>
      <Modal {...args} {...modal} footer={ModalFooter}>
        <div className={"px-5"} style={{ height: "900px" }}>
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
          Hello body
          <br />
        </div>
      </Modal>
    </div>
  );
}

describe("Modal", () => {
  describe("WithTitle", () => {
    it("should display the modal when we click on the button", async () => {
      const onClose = vi.fn();

      render(<WithTitle title='Modal title' onClose={onClose} />);

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
      render(
        <WithFooter
          {...{
            title: "Modal title"
          }}
        />
      );

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

      render(
        <WithFooter
          {...{
            title: "Modal title"
          }}
          onSubmit={onSubmit}
        />
      );

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
