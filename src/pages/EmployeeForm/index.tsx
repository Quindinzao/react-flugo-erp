/* eslint-disable @typescript-eslint/no-explicit-any */
// External Libraries
import { useNavigate } from "react-router-dom";

// Components
import StepForm from "../../components/StepForm";
import Layout from "../../components/Layout";

// Services
import { saveEmployee } from "../../services/employeeService";

// Constants
import { 
  EMPLOYEE_FORM as employeeForm, 
  EMPLOYEE_DEFAULT_VALUE as employeeDefaultValue
} from "../../constants/employees";

// Interfaces
import type { EmployeeProps } from "../../interfaces/EmployeeProps";

const EmployeeForm = () => {
  const navigate = useNavigate();

  const handleSave = async (data: EmployeeProps) => {
    try {
      await saveEmployee(data);
      navigate("/employees");
    } catch (error: any) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <Layout>
      <StepForm 
        steps={employeeForm} 
        onFinish={handleSave} 
        defaultValue={employeeDefaultValue} 
      />
    </Layout>
  );
}

export default EmployeeForm;