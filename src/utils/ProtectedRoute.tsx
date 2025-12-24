import { useFetchUser } from "@/hooks/useFetchUser";
import type { JSX } from "react"
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const {user, isPending} = useFetchUser();
  const path = window.location.pathname

  if (isPending) return <div>Loading...</div>;
  

  if (!user && !isPending) {
    console.log("line 15",user,isPending)
    return <Navigate to={`/auth/login?redirect=${path}`}  replace />;
  }

  return children;
}

export default ProtectedRoute