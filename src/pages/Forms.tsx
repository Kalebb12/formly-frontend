import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserForms } from "@/api/forms";
import CreateFormModal from "@/components/CreateFormModal";
import FormCard from "@/components/FormCard";

const Forms = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data, isPending, error } = useQuery({
    queryFn: () => getUserForms(),
    queryKey: ["forms"],
  });

  const shadowCards = Array(6).fill(null);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">
          Welcome back {user?.name} &#x1F44B;
        </h2>
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
            ></div>
          ))}
        </div>
      )}
      {error && <div>Something went wrong!!</div>}

      {data && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          <CreateFormModal />
          {data.map((form) => (
            <FormCard form={form} key={form._id}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Forms;
