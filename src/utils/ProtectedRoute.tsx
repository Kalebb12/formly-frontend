import { useAuthStore } from "@/store/auth.store"
import type { JSX } from "react"
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isPending } = useAuthStore();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login"  replace />;
  }
  
  return children;
}

export default ProtectedRoute