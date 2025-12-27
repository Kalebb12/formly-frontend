import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import type { registerField } from "@/types/auth.types";
import { registerFn } from "@/api/auth";
import { toast } from "sonner";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/authSlice";
import type { AxiosError } from "axios";

const Register = () => {
  type RegisterFormInputs = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }

  const dispatch = useAppDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: registerField) => registerFn(data),
    onSuccess: (res) => {
      toast.success("login successful");
      dispatch(setUser(res.data.user));
    },
    onError: (e : AxiosError<{ message: string }>) => {
      toast.error(e.response?.data?.message || "something went wrong");
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    mutate(data);
  };

  return (
    <div className="mx-auto self-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-card rounded-2xl mx-auto shadow-lg border border-border"
      >
        <header className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-card-foreground"
          >
            Create an account
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-sm text-muted-foreground"
          >
            Start building forms in seconds
          </motion.p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="sr-only">Full name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <User size={16} />
              </span>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Full name"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Full name"
              />
            </div>
            {errors.name && (
              <span className="text-sm text-destructive">
                Full name is required
              </span>
            )}
          </div>

          <div>
            <label className="sr-only">Email</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail size={16} />
              </span>
              <input
                type="email"
                {...register("email", {
                  required: { value: true, message: "Please enter your email" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="you@company.com"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Email"
              />
            </div>
            {errors.email && (
              <span className="text-sm text-destructive">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="sr-only">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Lock size={16} />
              </span>
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please confirm your password",
                  },
                  minLength: { value: 6, message: "Password too short" },
                  maxLength: { value: 20, message: "Password too long" },
                })}
                placeholder="Create a password"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Password"
              />
            </div>
            {errors.password && (
              <span className="text-sm text-destructive">
                {errors.password.message}
              </span>
            )}
          </div>

          <div>
            <label className="sr-only">Confirm password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Lock size={16} />
              </span>
              <input
                type="password"
                {...register("passwordConfirmation", {
                  required: {
                    value: true,
                    message: "Please confirm your password",
                  },
                  minLength: { value: 6, message: "Password too short" },
                  maxLength: { value: 20, message: "Password too long" },
                  validate: (v) =>
                    v === watch("password") || "Passwords do not match",
                })}
                placeholder="Confirm password"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Confirm password"
              />
            </div>
            {errors.passwordConfirmation && (
              <span className="text-sm text-destructive">
                {errors.passwordConfirmation.message}
              </span>
            )}
          </div>

          {/* {error && <div className="text-sm text-destructive">{error}</div>} */}

          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-2 rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-60"
            disabled={isPending}
          >
            {isPending ? "Creating account..." : "Create account"}
          </motion.button>
        </form>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/auth/login" className="underline">
            Sign in
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
