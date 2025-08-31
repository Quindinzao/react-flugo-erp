// External Libraries
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import EmployeeList from "../pages/EmployeeList";
import EmployeeForm from "../pages/EmployeeForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees" replace />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employees/add" element={<EmployeeForm />} />
    </Routes>
  );
}

export default AppRoutes;