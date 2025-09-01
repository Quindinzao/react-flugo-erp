// External Libraries
import {
  Routes, 
  Route, 
  Navigate 
} from "react-router-dom";

// Pages
import Login from "../pages/Login";
import EmployeeList from "../pages/EmployeeList";
import EmployeeForm from "../pages/EmployeeForm";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";

// Routes
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Navigate to="/dashboard" replace />
          </PrivateRoute>
        } 
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <PrivateRoute>
            <EmployeeList />
          </PrivateRoute>
        }
      />
      <Route
        path="/employees/add"
        element={
          <PrivateRoute>
            <EmployeeForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;