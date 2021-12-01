/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import noop from "lodash";

export function useModal() {
  const [show, setShowModal] = useState(false);

  return {
    show,
    setShowModal,
    openModal() {
      setShowModal(true);
    },
    closeModal() {
      setShowModal(false);
    }
  };
}

export interface ModalProps extends Record<string, any> {
  show?: boolean;
  closeModal?: () => void;
  onClose?: () => void;
  footer?: any;
  title?: string;
}

export function Modal({
  show,
  children,
  closeModal = noop as any,
  onClose = noop as any,
  title,
  footer: ModalFooter,
  style,
  className = "",
  ...props
}: PropsWithChildren<ModalProps>) {
  const titleRef = useRef<HTMLDivElement>();
  const footerRef = useRef<HTMLDivElement>();
  const [maxHeight, setMaxHeight] = useState<string>();

  const onClickClose = () => {
    closeModal();
    onClose();
  };

  useEffect(() => {
    if (titleRef.current || footerRef.current) {
      const height =
        (titleRef?.current?.offsetHeight || 0) +
        (footerRef?.current?.offsetHeight || 0);

      setMaxHeight(`calc(85vh - ${height}px)`);
    } else {
      setMaxHeight("auto");
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div
      role={"dialog"}
      className={`formio-dialog formio-dialog-theme-default ${className}`}
    >
      <div className='formio-dialog-overlay' onClick={onClickClose} />
      <div style={style} className={"formio-dialog-content"}>
        <div className={"formio-dialog-wrapper"}>
          {title ? (
            <div
              className={"formio-dialog-title"}
              ref={titleRef}
              data-testid={"modalTitle"}
            >
              {title}
            </div>
          ) : null}

          <div
            className='formio-dialog-body'
            style={{ maxHeight }}
            data-testid={"modalBody"}
          >
            {show && children}
          </div>

          {ModalFooter ? (
            <div
              className={"formio-dialog-footer"}
              ref={footerRef}
              data-testid={"modalFooter"}
            >
              <ModalFooter
                {...props}
                closeModal={closeModal}
                onClose={onClickClose}
              />
            </div>
          ) : null}
        </div>
        <button
          className='formio-dialog-close float-right btn btn-secondary btn-sm'
          aria-label='close'
          data-testid={"closeModal"}
          onClick={onClickClose}
        />
      </div>
    </div>
  );
}
