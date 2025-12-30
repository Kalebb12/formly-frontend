import { FilePlus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createForm } from "@/api/forms";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FormType } from "@/types/forms";

const CreateFormModal = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const queryClient = useQueryClient();
  type Inputs = Pick<FormType, "title" | "description">;

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Inputs) => createForm(data),
    mutationKey: ["create-form"],
    onSuccess: () => {
      toast.success("Form created successfully");
      reset();
      queryClient.invalidateQueries({ queryKey: ["forms"] });
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    mutate(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white flex flex-col gap-2 items-center justify-center h-full w-full p-4 space-y-3 rounded cursor-pointer shadow"
        >
          <FilePlus strokeWidth={1} className="size-10" />
          <span className="font-medium">Create New Form</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="py-3">
            <DialogTitle>Create New Form</DialogTitle>
            <DialogDescription>
              Create new form here. Click create form when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <label htmlFor="name-1">Title</label>
              <Input
                id="name-1"
                {...register("title", { required: true, minLength: 3 })}
                placeholder="Form name"
              />
              {errors.title?.type === "required" && (
                <p className="text-red-600">Title is required</p>
              )}
              {errors.title?.type === "minLength" && (
                <p className="text-red-600">
                  Title must be at least 3 characters
                </p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Description</Label>
              <Textarea
                id="description"
                rows={4}
                {...register("description")}
                placeholder="Enter form description"
              />
            </div>
          </div>
          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating..." : "Create Form"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFormModal;