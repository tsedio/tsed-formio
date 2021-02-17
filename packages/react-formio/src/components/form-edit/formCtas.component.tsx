import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import { useTooltip } from "../../hooks/useTooltip";
import { FormOptions } from "../../interfaces";
import { iconClass } from "../../utils/iconClass";

export interface FormEditCTAsProps {
  saveText?: string;
  options?: FormOptions;
  hasUndo?: boolean;
  hasRedo?: boolean;
  disabled?: boolean;
  onCopy?: Function;
  onSubmit?: Function;
  onReset?: Function;
  onUndo?: Function;
  onRedo?: Function;
}

export function FormEditCTAs({
  saveText = "Save form",
  disabled,
  options = {},
  onCopy,
  hasUndo,
  hasRedo,
  onUndo,
  onRedo,
  onReset,
  onSubmit
}: FormEditCTAsProps): ReactElement {
  const { i18n: t = (t: string): string => t } = options;

  const copyTooltipRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: t("Copy")
  });

  const undoTooltipRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: t("Undo last change")
  });

  const redoTooltipRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: t("Redo last change")
  });

  const resetTooltipRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: t("Reset all changes")
  });

  return (
    <div className={"form-edit__actions"}>
      <div>
        <button
          className={`btn btn-primary btn-save flex ${
            disabled ? "disabled" : ""
          }`}
          disabled={disabled}
          onClick={() => !disabled && onSubmit()}
        >
          <i className={`mr-1 ${iconClass(options.iconset, "save")}`} />
          {saveText}
        </button>

        <div>
          <button
            className={`btn btn-light btn-undo ${hasUndo ? "" : "disabled"}`}
            onClick={() => onUndo()}
            ref={undoTooltipRef}
          >
            <i className={iconClass(options.iconset, "undo")} />
          </button>

          <button
            className={`btn btn-light btn-redo ${hasRedo ? "" : "disabled"}`}
            onClick={() => onRedo()}
            ref={redoTooltipRef}
          >
            <i className={iconClass(options.iconset, "redo")} />
          </button>
        </div>

        <div>
          {onCopy && (
            <button
              className='btn btn-light'
              onClick={() => onCopy()}
              ref={copyTooltipRef}
            >
              <i className={iconClass(options.iconset, "copy")} />
            </button>
          )}

          <button
            className={`btn btn-light btn-reset`}
            onClick={() => onReset()}
            ref={resetTooltipRef}
          >
            <i className={iconClass(options.iconset, "reset")} />
          </button>
        </div>
      </div>
    </div>
  );
}

FormEditCTAs.propTypes = {
  saveText: PropTypes.string,
  options: PropTypes.object,
  hasUndo: PropTypes.bool,
  hasRedo: PropTypes.bool,
  disabled: PropTypes.bool,
  onCopy: PropTypes.func,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
};
