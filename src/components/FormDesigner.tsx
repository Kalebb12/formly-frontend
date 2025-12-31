import { useDroppable } from "@dnd-kit/core";
import { FormElements } from "./FormElements";
import SideBarElement from "./SideBarElement";
import { cn } from "@/lib/utils";
const FormDesigner = () => {
  const droppable = useDroppable({
    id: "drop-area",
    data: {
      isFormBuilderDropArea: true,
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
        {!droppable.isOver && (
          <h2 className="text-3xl flex grow justify-center items-center font-semibold text-center">
            Drag & Drop to create form
          </h2>
        )}

        {droppable.isOver && (
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
