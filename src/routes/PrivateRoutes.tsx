// External Libraries
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

// Contexts
import { useAuth } from "../contexts/AuthContext";
import { Box } from "@mui/material";

// Assets
import logo from '../assets/flugo.svg';

interface PrivateRoutesProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRoutesProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor={"primary.main"}
      >
        <img src={logo} height={64} alt={'Carregando'} />
      </Box>
    )
  }
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;