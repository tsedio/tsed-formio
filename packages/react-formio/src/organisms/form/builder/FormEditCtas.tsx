import { ReactElement } from "react";

import { Icon as DefaultIcon } from "../../../atoms/icon/Icon";
import { useTooltip } from "../../../hooks/useTooltip";
import type { FormOptions } from "../../../interfaces";
import { Button as DefaultButton } from "../../../molecules/button/Button";
import { getComponent, registerComponent } from "../../../registries/components";

export interface FormEditCTAsProps extends Record<string, unknown> {
  saveText?: string;
  options?: FormOptions;
  hasUndo?: boolean;
  hasRedo?: boolean;
  disabled?: boolean;
  onCopy?: () => void;
  onSubmit?: () => void;
  onReset?: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
}

export function FormEditCTAs({
  saveText = "Save",
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

  const copyTooltipRef: any = useTooltip({
    trigger: "hover",
    placement: "top",
    title: t("Copy")
  });

  const undoTooltipRef: any = useTooltip({
    trigger: "hover",
    placement: "top",
    title: t("Undo last change")
  });

  const redoTooltipRef: any = useTooltip({
    trigger: "hover",
    placement: "top",
    title: t("Redo last change")
  });

  const resetTooltipRef: any = useTooltip({
    trigger: "hover",
    placement: "top",
    title: t("Reset all changes")
  });

  const Button = getComponent<typeof DefaultButton>("Button");
  const Icon = getComponent<typeof DefaultIcon>("Icon");

  return (
    <div className={"form-edit__actions"}>
      <div>
        <Button variant='primary' className='btn-save' disabled={disabled} onClick={() => onSubmit?.()}>
          <Icon name='save' iconset={options.iconset} />
          {saveText}
        </Button>

        <div>
          <Button variant='light' className='btn-undo' disabled={!hasUndo} onClick={() => onUndo?.()} ref={undoTooltipRef}>
            <Icon name='undo' iconset={options.iconset} />
          </Button>

          <Button variant='light' className='btn-redo' disabled={!hasRedo} onClick={() => onRedo?.()} ref={redoTooltipRef}>
            <Icon name='redo' iconset={options.iconset} />
          </Button>
        </div>

        <div>
          {onCopy && (
            <Button variant='light' className='btn-copy' onClick={() => onCopy()} ref={copyTooltipRef}>
              <Icon name='copy' iconset={options.iconset} />
            </Button>
          )}

          <Button variant='light' className='btn-reset' onClick={() => onReset && onReset()} ref={resetTooltipRef!}>
            <Icon name='reset' iconset={options.iconset} />
          </Button>
        </div>
      </div>
    </div>
  );
}

registerComponent("FormEditCTAs", FormEditCTAs);
