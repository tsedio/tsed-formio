import { PropsWithChildren, useRef } from "react";

export function WrapComponent({ children }: PropsWithChildren<any>) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div data-testid='formio-container' ref={ref}>
      {children(ref)}
    </div>
  );
}
