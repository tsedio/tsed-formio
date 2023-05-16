import React, { PropsWithChildren } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function DrapNDropContainer({ enableDragNDrop, children }: PropsWithChildren<{ enableDragNDrop?: boolean }>) {
  return enableDragNDrop ? <DndProvider backend={HTML5Backend}>{children}</DndProvider> : <>{children}</>;
}
