import { getFormById } from "@/api/forms";
import FormBuilder from "@/components/FormBuilder";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const EditForm = () => {
  const { id } = useParams();
  const { data, isPending, error } = useQuery({
    queryFn: () => getFormById(id!),
    queryKey: ["form", id],
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return <FormBuilder form={data} />;
};

export default EditForm;
