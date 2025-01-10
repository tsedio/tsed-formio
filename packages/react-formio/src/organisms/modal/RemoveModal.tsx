import classnames from "classnames";
import { PropsWithChildren, useState } from "react";

import { InputText } from "../../molecules/forms/input-text/InputText";
import { Modal, ModalProps } from "../../molecules/modal/Modal";
import { iconClass } from "../../utils/iconClass";

function RemoveModalFooter({ value, valueToCompare, onSubmit, onClose, i18n = (f: string) => f }: ModalProps) {
  return (
    <div className={"flex items-center justify-center bg-white p-2"}>
      <button data-testid='customCloseModal' className={"btn btn-outline-dark mx-2"} onClick={onClose}>
        {i18n("Cancel")}
      </button>
      <button
        disabled={valueToCompare !== value}
        data-testid='customSubmitModal'
        className={"btn btn-danger mx-2"}
        onClick={(e) => {
          if (valueToCompare === value) {
            onSubmit(e);
          }
        }}
      >
        <i className={classnames(iconClass(undefined, "trash"), "mr-2")} />
        {i18n("Remove")}
      </button>
    </div>
  );
}

export interface RemoveModalProps extends ModalProps {
  valueToCompare: string;
  itemType?: string;
  i18n?: (f: string) => string;
  maxWidth?: string;
}

export function RemoveModal({ maxWidth = "300px", children, ...props }: PropsWithChildren<RemoveModalProps>) {
  const { i18n = (f) => f } = props;
  const [value, setValue] = useState();

  return (
    <Modal
      {...props}
      className={classnames(props.className, "formio-dialog-theme-remove")}
      style={{ maxWidth }}
      title={`Drop ${props.itemType?.toLowerCase()}`}
      value={value}
      footer={RemoveModalFooter}
    >
      <div className='px-4 pt-3 pb-5'>
        <div className='pb-1'>
          {children}
          {i18n("To drop")} <strong>{props.valueToCompare}</strong>,&nbsp;
          {i18n("type the")}&nbsp;
          <strong>&quot;{props.itemType?.toLowerCase()}&quot;</strong>&nbsp;
          {i18n("name")} <strong>&quot;{props.valueToCompare}&quot;</strong>.
        </div>
        <InputText name='remove' value={value} onChange={(name, value) => setValue(value)} />
      </div>
    </Modal>
  );
}
