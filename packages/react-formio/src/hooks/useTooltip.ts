import { useEffect, useRef } from "react";
import Tooltip, { Options } from "tooltip.js";

export function useTooltip(options: Options) {
  const ref = useRef();

  useEffect(() => {
    ref.current && new Tooltip(ref.current as any, options);
  }, [ref, options]);

  return ref;
}
