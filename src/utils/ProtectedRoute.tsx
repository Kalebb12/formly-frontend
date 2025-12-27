import type { RootState } from "@/store/store";
import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const path = window.location.pathname;

  if (loading) return <div>Loading...</div>;

  if (!user && !loading) {
    return <Navigate to={`/auth/login?redirect=${path}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
