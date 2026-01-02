import { type Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { SideBarElementDragOverlay } from "./SideBarElement";
import { FormElements, type ElementsType } from "./FormElements";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const DragOverlayWrapper = () => {
  const { elements } = useSelector((state: RootState) => state.designer);
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

  const isDesignerElement = draggedItem.data.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) node = <div>Element not found!</div>;
    else {
      const DesignerElementComponent =
        FormElements[element.type].designComponent;

      node = (
        <div className="flex bg-accent border rounded-md h-30 w-full py-2 px-4 opacity-80">
          <DesignerElementComponent elementInstance={element} />
        </div>
      );
    }
  }
  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
