/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// External Libraries
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Components
import Loading from "../../components/Loading";

// Contexts
import { useAuth } from "../../contexts/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error: any) {
      alert(error.message)
      navigate("/dashboard")
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <Loading />;
};

export default Logout;
