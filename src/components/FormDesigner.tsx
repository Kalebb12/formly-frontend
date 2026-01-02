import { useDndMonitor, useDroppable, type DragEndEvent } from "@dnd-kit/core";
import { FormElements } from "./FormElements";
import SideBarElement from "./SideBarElement";
import { cn } from "@/lib/utils";
import { idGenerator } from "@/lib/idGenerator";
import DesignerElementWrapper from "./DesignerElementWrapper";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { useAppDispatch } from "@/store/hooks";
import { addElement } from "@/store/DesignerSlice";
const FormDesigner = () => {
  const droppable = useDroppable({
    id: "drop-area",
    data: {
      isFormBuilderDropArea: true,
    },
  });

  const { elements } = useSelector((state: RootState) => state.designer);
  const dispatch = useAppDispatch();

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      if (!active || !over) return;

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
      if (isDesignerBtnElement) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGenerator()
        );

        dispatch(addElement({ index: 0, element: newElement }));
      }
    },
  });

  return (
    <div className="flex gap-2 w-full h-full">
      <div
        ref={droppable.setNodeRef}
        className={cn(
          "flex flex-col bg-gray-400 rounded-md w-full h-full justify-start overflow-y-auto items-center px-3",
          droppable.isOver && "ring-2 ring-black"
        )}
      >
        {!droppable.isOver && !elements && (
          <h2 className="text-3xl flex grow justify-center items-center font-semibold text-center">
            Drag & Drop to create form
          </h2>
        )}

        {elements.length > 0 && (
          <div className="flex flex-col w-full gap-4 p-4">
            {elements.map((element) => {
              return (
                <DesignerElementWrapper key={element.id} element={element} />
              );
            })}
          </div>
        )}
        {droppable.isOver && !elements && (
          <div className="p-4 w-full">
            <div className="h-30 rounded-md bg-primary/20"></div>
          </div>
        )}
      </div>

      <aside className="w-100 flex flex-col gap-2 rounded-md border-2 border-gray-800 p-4 overflow-y-auto h-full">
        Elements
        <SideBarElement formElement={FormElements.TextField} />
      </aside>
    </div>
  );
};

export default FormDesigner;
