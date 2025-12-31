import { type Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { SideBarElementDragOverlay } from "./SideBarElement";
import { FormElements, type ElementsType } from "./FormElements";

const DragOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node;
  const isDesignerBtnElement = draggedItem.data.current?.isDesignerBtnElement;
  if (isDesignerBtnElement) {
    const type = draggedItem.data.current?.type as ElementsType;
    node = <SideBarElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
