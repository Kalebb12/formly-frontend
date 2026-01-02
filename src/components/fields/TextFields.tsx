import { PenLine } from "lucide-react";
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Text Field",
  helperText: "Helper text",
  required: true,
  placeHolder: "Value here...",
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),

  designBtnElement: {
    icon: PenLine,
    label: "Text Field",
  },
  designComponent: DesignerComponent,
  formComponent: () => <div>TextField</div>,
  propertiesComponent: () => <div>TextField</div>,
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {element.extraAttributes.label}{" "}
        {element.extraAttributes.required && "*"}
      </Label>
      <Input
        readOnly
        disabled
        placeholder={element.extraAttributes.placeHolder}
      />
      {element.extraAttributes.helperText && (
        <p className="text-muted-foreground text-[0.8rem]">
          {element.extraAttributes.helperText}{" "}
        </p>
      )}
    </div>
  );
}
