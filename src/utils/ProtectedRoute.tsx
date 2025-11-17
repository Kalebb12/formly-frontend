import { useAuthStore } from "@/store/auth.store"
import type { JSX } from "react"
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isPending } = useAuthStore();
  const path = window.location.pathname

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={`/auth/login?redirect=${path}`}  replace />;
  }
  
  return children;
}

export default ProtectedRoute