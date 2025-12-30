export type FormType = {
  _id: string;
  owner: string;
  title: string;
  description: string;
  fields: {
    name: string;
    label: string;
    fieldType: string;
    options: string[];
    required: boolean;
    placeholder: string;
  }[];
  isPublished: boolean;
  slug: string;
  previewUrl: string;
  shareableUrl: string;
  createdAt: Date;
}

interface FieldOption {
  id: string;
  value: string;
}

export type FieldType = {
  name: string;
  label: string;
  fieldType: string;
  options: FieldOption[];
  required: boolean;
  placeholder: string;
};