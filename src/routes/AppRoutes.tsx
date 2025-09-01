// External Libraries
import {
  Routes, 
  Route, 
  // Navigate 
} from "react-router-dom";

// Pages
import Login from "../pages/Login";
import EmployeeList from "../pages/EmployeeList";
import EmployeeForm from "../pages/EmployeeForm";

// Components
// import Layout from "../components/Layout";

// Routes
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Navigate to="/employees" replace />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employees/add" element={<EmployeeForm />} /> */}
      {/* <Layout> */}
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
      {/* </Layout> */}
    </Routes>
  );
}

export default AppRoutes;