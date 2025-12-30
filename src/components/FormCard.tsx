import type { FormType } from "@/types/forms";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

const FormCard = ({ form }: { form: FormType }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white p-4 space-y-3 relative rounded shadow"
    >
      <span
        className={`text-xs font-medium px-3 py-1 rounded-sm absolute top-2 right-2 ${
          form.isPublished
            ? "text-green-500 bg-green-100"
            : "text-red-500 bg-red-100"
        }`}
      >
        {form.isPublished ? "Published" : "Draft"}
      </span>
      <h1 className="font-semibold mt-5 truncate">{form.title}</h1>
      <p>{form.description}</p>
      <Button
        className="bg-green-500 hover:bg-green-600"
        onClick={() => navigate(`/form/${form._id}`)}
      >
        View Form
      </Button>
    </div>
  );
};

export default FormCard;
