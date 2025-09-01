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

const EmployeeForm = () => {
  const navigate = useNavigate();

  const handleFinish = async (data: any) => {
    try {
      await saveEmployee(data);
      navigate("/employees");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <StepForm steps={employeeForm} onFinish={handleFinish} defaultValue={employeeDefaultValue} />
    </Layout>
  );
}

export default EmployeeForm;