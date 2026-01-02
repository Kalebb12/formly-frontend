import { useDraggable, useDroppable } from "@dnd-kit/core";
import { FormElements, type FormElementInstance } from "./FormElements";
import { useState } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/store/hooks";
import { removeElement } from "@/store/DesignerSlice";

const DesignerElementWrapper = ({
  element,
}: {
  element: FormElementInstance;
}) => {
  const DesignerElement = FormElements[element.type].designComponent;
  const dispatch = useAppDispatch();
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);
  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });

  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
      type: element.type,
      elementId: element.id,
      isDesignerElement: true,
    },
  });

  if (draggable.isDragging) return null;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      {...draggable.listeners}
      className="relative h-30 flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      <div
        ref={topHalf.setNodeRef}
        className="absolute w-full h-1/2 rounded-t"
      ></div>
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute w-full h-1/2 rounded-b bottom-0"
      ></div>

      {mouseIsOver && (
        <>
          <div className="absolute right-0 h-full">
            <Button
              variant="outline"
              onClick={() => dispatch(removeElement({ id: element.id }))}
              className="flex justify-center h-full border rounded-md rounded-l-none bg-red-500"
            >
              <Trash />
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-1/2 animate-pulse">
            <p className="text-muted-foreground text-sm">
              click for properties or drag to move
            </p>
          </div>
        </>
      )}

      {topHalf.isOver && (
        <div className="absolute top-0 w-full rounded-md h-[17px] bg-accent rounded-b-none" />
      )}
      <div
        className={cn(
          "flex w-full h-[120px] items-center rounded-md bg-accent/40 px-4 py-2 pointer-events-none opacity-100",
          mouseIsOver && "opacity-30"
        )}
      >
        <DesignerElement elementInstance={element} />
      </div>
      {bottomHalf.isOver && (
        <div className="absolute bottom-0 w-full rounded-md h-[17px] bg-accent rounded-t-none" />
      )}
    </div>
  );
};

export default DesignerElementWrapper;
