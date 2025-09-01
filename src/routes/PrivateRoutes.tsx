// External Libraries
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

// Contexts
import { useAuth } from "../contexts/AuthContext";
import Loading from "../components/Loading";

interface PrivateRoutesProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRoutesProps) => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;