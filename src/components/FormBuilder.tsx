import type { FormType } from "@/types/forms";
import { Button } from "./ui/button";
import FormDesigner from "./FormDesigner";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";

const FormBuilder = ({ form }: { form: FormType }) => {
  console.log(form);

  return (
    <DndContext>
      <main className="flex flex-col">
        <nav className="flex items-center justify-between">
          <span>
            Form : <b>{form.title}</b>
          </span>

          <div className="space-x-2">
            <Button variant="outline">Preview</Button>
            <Button variant="outline">Publish</Button>
            <Button variant="outline">Save</Button>
          </div>
        </nav>
        <div className="grow overflow-y-auto h-200 p-2 relative">
          <FormDesigner />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default FormBuilder;
