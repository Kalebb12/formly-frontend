import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAppDispatch } from "@/store/hooks";
import { useMutation } from "@tanstack/react-query";
import { loginFn } from "@/api/auth";
import type { authField } from "@/types/auth.types";
import { setUser } from "@/store/authSlice";
import type { AxiosError } from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: authField) => loginFn(data),
    onSuccess: (res) => {
      dispatch(setUser(res.data.user));
      toast.success("Login successful");
    },
    onError: (e: AxiosError<{ message: string }>) => {
      console.log(e);
      toast.error(e.response?.data?.message || "something went wrong");
    },
  });

  type LoginFormInputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: authField) => {
    mutate(data);
  };
  return (
    <div className="mx-auto self-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 mx-auto bg-card rounded-2xl shadow-lg border border-border"
      >
        <header className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-card-foreground"
          >
            Formly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-sm text-muted-foreground"
          >
            Sign in to your account
          </motion.p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="sr-only">Email</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail size={16} />
              </span>
              <input
                type="text"
                {...register("email", {
                  required: { message: "Please enter your email", value: true },
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
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter your password",
                  },
                  minLength: { value: 6, message: "Password too short" },
                  maxLength: { value: 20, message: "Password too long" },
                })}
                placeholder="Your password"
                className="w-full pl-10 pr-12 py-2 rounded-lg bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Password"
              />

              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="text-sm text-destructive">
                {errors.password.message}
              </span>
            )}
          </div>

          <motion.button
            type="submit"
            className="w-full py-2 rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-60"
            disabled={isPending}
          >
            {isPending ? "Signing in..." : "Sign in"}
          </motion.button>
        </form>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/auth/register" className="underline">
            Register
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
