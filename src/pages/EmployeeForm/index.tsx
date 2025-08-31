/* eslint-disable @typescript-eslint/no-explicit-any */
// External Libraries
import { Container } from "@mui/material";

// Components
import StepForm from "../../components/StepForm";

// Services
import { saveEmployee } from "../../services/employeeService";

// Constants
import { 
  EMPLOYEE_FORM as employeeForm, 
  EMPLOYEE_DEFAULT_VALUE as employeeDefaultValue
} from "../../constants/employees";

const EmployeeForm = () => {

  const handleFinish = async (data: any) => {
    try {
      await saveEmployee(data);
      alert("Funcionário salvo com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar funcionário.");
    }
  };

  return (
    <Container>
      <StepForm steps={employeeForm} onFinish={handleFinish} defaultValue={employeeDefaultValue} />
    </Container>
  );
}

export default EmployeeForm;