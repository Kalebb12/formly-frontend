import type { RootState } from "@/store/store";
import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router";

const RedirectIfAuthenticated = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const [searchParams] = useSearchParams();
  const path = searchParams.get("redirect");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to={path || "/"} replace />;
  }
  return children;
};

export default RedirectIfAuthenticated;
