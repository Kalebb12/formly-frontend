import type { FormType } from "@/types/forms";

const FormBuilder = ({ form }: { form: FormType }) => {
  console.log(form)
  return <div>FormBuilder</div>;
};

export default FormBuilder;
