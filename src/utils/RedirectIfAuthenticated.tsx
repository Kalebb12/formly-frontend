import { useFetchUser } from "@/hooks/useFetchUser";
import type { JSX } from "react";
import { Navigate } from "react-router";

const RedirectIfAuthenticated = ({ children }: { children: JSX.Element }) => {
  const {user, isPending } = useFetchUser();

  if (isPending) {
    return <div>Loading...</div>;
  }

  
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RedirectIfAuthenticated;
