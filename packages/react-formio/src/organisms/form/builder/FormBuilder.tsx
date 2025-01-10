import type { CSSProperties } from "react";

import { useFormBuilder, UseFormBuilderProps } from "./useFormBuilder";

export function FormBuilder({
  className = "",
  style = {},
  ["data-testid"]: dataTestId = "formio-builder-container",
  ...props
}: UseFormBuilderProps & {
  className?: string;
  style?: CSSProperties;
  ["data-testid"]?: string;
}) {
  const renderElement = useFormBuilder(props);

  return (
    <div style={style} className={className} data-testid={dataTestId}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div ref={renderElement} onClick={(e) => e.stopPropagation()}>
        <div />
      </div>
    </div>
  );
}
