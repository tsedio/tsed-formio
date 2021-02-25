import classnames from "classnames";
import noop from "lodash/noop";
import React, { useState } from "react";
import { iconClass } from "../../utils/iconClass";
import { InputText } from "../input-text/inputText.component";
import { Modal, ModalProps } from "./modal.component";

function RemoveModalFooter({
  value,
  valueToCompare,
  onSubmit,
  onClose,
  i18n = noop
}: ModalProps) {
  return (
    <div className={"flex items-center justify-center bg-white p-2"}>
      <button
        data-testid='customCloseModal'
        className={"btn btn-outline-dark mx-2"}
        onClick={onClose}
      >
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
}

export function RemoveModal(props: RemoveModalProps) {
  const [value, setValue] = useState();

  return (
    <Modal
      {...props}
      style={{ maxWidth: "300px" }}
      title={`Drop ${props.itemType?.toLowerCase()}`}
      value={value}
      footer={RemoveModalFooter}
    >
      <div className={"px-4 pt-3 pb-5"}>
        <div className={"pb-1"}>
          To drop <strong>{props.valueToCompare}</strong>, type the{" "}
          <strong>{props.itemType?.toLowerCase()}</strong> name{" "}
          <strong>{props.valueToCompare}</strong>.
        </div>
        <InputText
          name='remove'
          value={value}
          onChange={(name, value) => setValue(value)}
        />
      </div>
    </Modal>
  );
}
