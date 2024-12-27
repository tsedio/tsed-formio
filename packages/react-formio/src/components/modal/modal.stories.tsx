import { Modal, ModalProps, useModal } from "./modal.component";
import { RemoveModal, RemoveModalProps } from "./removeModal.component";

export default {
  title: "ReactFormio/Modal",
  component: Modal,
  argTypes: {
    onSubmit: {
      title: {
        control: {
          type: "text"
        }
      },
      control: {
        action: "onSubmit"
      }
    }
  },
  parameters: {}
};

export const Sandbox = (args: ModalProps) => {
  const modal = useModal();

  return (
    <div>
      <div>
        <button className={"btn btn-primary"} onClick={modal.openModal}>
          Open modal
        </button>
      </div>
      <Modal {...args} {...modal}>
        <div className={"p-5"} style={{ height: "900px" }}>
          Hello body
        </div>
      </Modal>
    </div>
  );
};

Sandbox.args = {};

export const WithTitle = (args: ModalProps) => {
  const modal = useModal();

  return (
    <div>
      <div>
        <button className={"btn btn-primary"} onClick={modal.openModal}>
          Open modal
        </button>
      </div>
      <Modal {...args} {...modal}>
        <div className={"p-5"} style={{ height: "900px" }}>
          Hello body
        </div>
      </Modal>
    </div>
  );
};

WithTitle.args = {
  title: "Modal title"
};

export const WithFooter = (args: ModalProps) => {
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
};

WithFooter.args = {
  title: "Modal title"
};

export const WithRemoveModal = (args: RemoveModalProps) => {
  const modal = useModal();

  return (
    <div>
      <div>
        <button className={"btn btn-primary"} onClick={modal.openModal}>
          Open modal
        </button>
      </div>
      <RemoveModal
        {...args}
        i18n={(f) => f}
        show={modal.show}
        onSubmit={modal.closeModal}
        onClose={modal.closeModal}
        closeModal={modal.closeModal}
      />
    </div>
  );
};

WithRemoveModal.args = {
  valueToCompare: "value",
  itemType: "form"
};
