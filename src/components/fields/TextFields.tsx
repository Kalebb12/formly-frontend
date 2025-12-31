import { PenLine } from "lucide-react";
import type { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text Field",
      helperText: "Helper text",
      required: true,
      placeHolder: "Value here...",
    },
  }),

  designBtnElement: {
    icon: PenLine,
    label: "Text Field",
  },
  designComponent: () => <div>TextField</div>,
  formComponent: () => <div>TextField</div>,
  propertiesComponent: () => <div>TextField</div>,
};
