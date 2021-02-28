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
  const { i18n = noop } = props;
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
          {i18n("To drop")} <strong>{props.valueToCompare}</strong>,{" "}
          {i18n("type the")}
          <strong>&quot;{props.itemType?.toLowerCase()}&quot;</strong>{" "}
          {i18n("name")} <strong>&quot;{props.valueToCompare}&quot;</strong>.
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
