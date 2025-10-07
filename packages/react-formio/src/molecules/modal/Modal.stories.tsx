import { Meta, StoryObj } from "@storybook/react-vite";

import { Modal, ModalProps, useModal } from "./Modal";

/**
 * The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.
 *
 * ```tsx
 * import {Modal} from "@tsed/react-formio/molecules/modal/Modal";
 * ```
 */
export default {
  title: "Modal",
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
  parameters: {},
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Sandbox: Story = {};

export const WithTitle: Story = {
  render: (args: ModalProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  args: {
    title: "Modal title"
  }
};

export const WithFooter = {
  render: (args: ModalProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  args: {
    title: "Modal title"
  }
};
