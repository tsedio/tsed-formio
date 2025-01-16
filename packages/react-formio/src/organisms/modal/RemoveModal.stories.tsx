import { Meta, StoryObj } from "@storybook/react";

import { useModal } from "../../molecules/modal/Modal";
import { RemoveModal, RemoveModalProps } from "./RemoveModal";

/**
 * Remove modal display a danger message and ask user to confirm action before executing the action.
 *
 * ```tsx
 * import {RemoveModal} from "@tsed/react-formio/organisms/modal/RemoveModal";
 * ```
 */
export default {
  title: "model/RemoveModal",
  component: RemoveModal,
  argTypes: {
    onSubmit: {
      title: {
        control: "text"
      },
      control: {
        action: "onSubmit"
      }
    }
  },
  parameters: {},
  render: (args: RemoveModalProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
  },
  tags: ["autodocs"]
} satisfies Meta<typeof RemoveModal>;

type Story = StoryObj<typeof RemoveModal>;

export const Usage: Story = {
  args: {
    valueToCompare: "value",
    itemType: "form"
  }
};
