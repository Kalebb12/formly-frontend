import { DialogDescription } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { NativeSelect, NativeSelectOption } from "./ui/native-select";
import { useState } from "react";
import { type FieldType } from "@/types/forms";

const AddFieldDialogue = () => {
  const [field, setField] = useState<FieldType>({
    label: "",
    name: "",
    fieldType: "text",
    required: false,
    placeholder: "",
    options: [],
  });

  interface OptionsEditorProps {
    options: { id: string; value: string }[];
    onChange: (opts: { id: string; value: string }[]) => void;
  }

  function OptionsEditor({ options, onChange }: OptionsEditorProps) {
    const addOption = () => {
      onChange([...options, { id: crypto.randomUUID(), value: "" }]);
    };

    const updateOption = (id: string, value: string) => {
      onChange(options.map((opt) => (opt.id === id ? { ...opt, value } : opt)));
    };
    const removeOption = (id: string) => {
      onChange(options.filter((opt) => opt.id !== id));
    };

    return (
      <div className="space-y-3">
        <p>Options</p>

        {options.map((opt) => (
          <div key={opt.id} className="flex items-center gap-3">
            <Input
              value={opt.value}
              className="max-w-sm"
              onChange={(e) => updateOption(opt.id, e.target.value)}
            />
            <Button type="button" onClick={() => removeOption(opt.id)}>
              Remove Option
            </Button>
          </div>
        ))}

        <Button type="button" onClick={addOption}>
          + Add Option
        </Button>
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add field</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add field to form</DialogTitle>
          <DialogDescription>Add a new field to the form</DialogDescription>
        </DialogHeader>
        <div className="flex-col flex">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Field label"
              value={field.label}
              onChange={(e) => setField({ ...field, label: e.target.value })}
            />
            <Input
              placeholder="Field name"
              value={field.name}
              onChange={(e) => setField({ ...field, name: e.target.value })}
            />
            <NativeSelect
              value={field.fieldType}
              className="w-30"
              onChange={(e) =>
                setField({ ...field, fieldType: e.target.value })
              }
            >
              <NativeSelectOption value="text">Text</NativeSelectOption>
              <NativeSelectOption value="radio">Radio</NativeSelectOption>
              <NativeSelectOption value="checkbox">Checkbox</NativeSelectOption>
              <NativeSelectOption value="select">Select</NativeSelectOption>
            </NativeSelect>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) =>
                  setField({ ...field, required: e.target.checked })
                }
              />
              Required
            </label>
          </div>

          {/* OPTIONS (only when needed) */}
          {(field.fieldType === "radio" ||
            field.fieldType === "select" ||
            (field.fieldType === "checkbox" && field.options)) && (
            <OptionsEditor
              options={field.options}
              onChange={(opts: { id: string; value: string }[]) =>
                setField({ ...field, options: opts })
              }
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddFieldDialogue;
