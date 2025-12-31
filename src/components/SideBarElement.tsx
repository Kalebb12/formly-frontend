import { cn } from "@/lib/utils";
import type { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";

const SideBarElement = ({ formElement }: { formElement: FormElement }) => {
  const { icon: Icon, label } = formElement.designBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      variant="outline"
      className={cn(
        "cursor-grab h-30 w-30 flex flex-col",
        draggable.isDragging && "ring-2 ring-primary"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon />
      <p>{label}</p>
    </Button>
  );
};

export default SideBarElement;

export const SideBarElementDragOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { icon: Icon, label } = formElement.designBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      variant="outline"
      className="cursor-grab h-30 w-30 flex flex-col"
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon />
      <p>{label}</p>
    </Button>
  );
};
