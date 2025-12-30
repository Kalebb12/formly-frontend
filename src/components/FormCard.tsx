import type { FormType } from "@/types/forms";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

const FormCard = ({ form }: { form: FormType }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 h-45 flex flex-col gap-3 relative items-start rounded shadow">
      <span
        className={`text-xs font-medium px-3 py-1 rounded-sm absolute top-2 right-2 ${
          form.isPublished
            ? "text-green-500 bg-green-100"
            : "text-red-500 bg-red-100"
        }`}
      >
        {form.isPublished ? "Published" : "Draft"}
      </span>
      <div className="space-y-2">
        <h1 className="font-semibold truncate max-w-50">{form.title}</h1>
        <p className="line-clamp-2 text-gray-500">{form.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis praesentium accusantium consectetur vel vero ullam recusandae, fuga tempore soluta voluptate pariatur et veritatis cupiditate rem, quo sapiente tenetur assumenda.</p>
        <p className="text-sm text-gray-500 font-bold">12mins ago</p>
      </div>
      <Button
        className="mt-auto w-full"
        onClick={() => navigate(`/form/${form._id}`)}
      >
        Edit form
      </Button>
    </div>
  );
};

export default FormCard;
