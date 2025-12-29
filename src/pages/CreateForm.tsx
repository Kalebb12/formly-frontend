import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import type { FieldType } from "@/types/forms";
import { useState } from "react";

const CreateForm = () => {
  const [form, setForm] = useState<FormSchema>({
    title: "",
    description: "",
    fields: [],
  });

  interface FormSchema {
    title: string;
    description: string;
    fields: FieldType[];
  }

  const addField = () => {
    setForm((prev) => ({
      ...prev,
      fields: [
        ...prev.fields,
        {
          name: "",
          label: "",
          fieldType: "text",
          required: false,
          placeholder: "",
          options: [],
        },
      ],
    }));
  };

  const updateField = <K extends keyof FieldType>(
    index: number,
    key: K,
    value: FieldType[K]
  ) => {
    setForm((prev) => {
      const fields = [...prev.fields];
      fields[index] = {
        ...fields[index],
        [key]: value,
      };

      return { ...prev, fields };
    });
  };
  interface OptionsEditorProps {
    options: string[];
    onChange: (options: string[]) => void;
  }

  function OptionsEditor({ options, onChange }: OptionsEditorProps) {
    const addOption = () => {
      onChange([...options, ""]);
    };

    const updateOption = (i: number, value: string) => {
      const updated = [...options];
      updated[i] = value;
      onChange(updated);
    };

    const removeOption = (i: number) => {
      onChange(options.filter((_, idx) => idx !== i));
    };

    return (
      <div className="space-y-3">
        <p>Options</p>

        {options.map((opt, i) => (
          <div key={i} className="flex items-center gap-3">
            <Input
              value={opt}
              className="max-w-sm"
              onChange={(e) => updateOption(i, e.target.value)}
            />
            <Button type="button" onClick={() => removeOption(i)}>
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
    <div>
      <h1>Create Form</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
        repellendus vel expedita sequi et odio incidunt omnis aperiam ad iste.
      </p>
      <div className="py-5 flex flex-col gap-3 max-w-3xl">
        <div>
          <label htmlFor="title" className="mx-0.5">
            Title
          </label>
          <Input type="text" id="title" placeholder="Enter form title" />
        </div>
        <div>
          <label htmlFor="description" className="mx-0.5">
            Description
          </label>
          <Textarea
            id="description"
            rows={4}
            placeholder="Enter form description"
          />
        </div>

        {form.fields.map((field, index) => (
          <div key={index} className="border-[#ddd] border-2 space-y-3 p-3">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Field label"
                value={field.label}
                onChange={(e) => updateField(index, "label", e.target.value)}
              />

              <Input
                placeholder="Field name"
                value={field.name}
                onChange={(e) => updateField(index, "name", e.target.value)}
              />

              <NativeSelect
                value={field.fieldType}
                className="w-30"
                onChange={(e) =>
                  updateField(index, "fieldType", e.target.value)
                }
              >
                <NativeSelectOption value="text">Text</NativeSelectOption>
                <NativeSelectOption value="radio">Radio</NativeSelectOption>
                <NativeSelectOption value="checkbox">
                  Checkbox
                </NativeSelectOption>
                <NativeSelectOption value="select">Select</NativeSelectOption>
              </NativeSelect>
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={field.required}
                  onChange={(e) =>
                    updateField(index, "required", e.target.checked)
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
                onChange={(opts) => updateField(index, "options", opts)}
              />
            )}
          </div>
        ))}

        <div className="flex items-center gap-3">
          <Button onClick={addField}>Add field</Button>
          <Button>Save Form</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
