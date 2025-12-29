import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getUserForms } from "@/api/forms";
import { useNavigate } from "react-router";

const Forms = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data, isPending, error } = useQuery({
    queryFn: () => getUserForms(),
    queryKey: ["forms"],
  });

  const navigate = useNavigate();
  const shadowCards = Array(6).fill(null);

  console.log(user,data)
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">
          Welcome back {user?.name} &#x1F44B;
        </h2>
        <Button className="bg-blue-500 hover:bg-blue-600"  onClick={()=> navigate("/create-form")}>Create Form</Button>
      </div>

      <div className="mt-4">
        <h3 className="font-medium text-lg">Your Forms</h3>
      </div>

      {isPending && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {shadowCards.map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-black/80 h-[180px] p-4 space-y-3 relative rounded shadow"
            >
            </div>
          ))}
        </div>
      )}
      {error && <div>Something went wrong!!</div>}

      {data && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data.map((form) => (
            <div
              key={form._id}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Forms;
