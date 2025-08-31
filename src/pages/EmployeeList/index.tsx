// External Libraries
import { Container } from "@mui/material";
import { useEffect, useState } from "react";

// Components
import EmployeeTableWrapper from "./components/EmployeeTableWrapper";

// Services
import { getEmployees } from "../../services/employeeService";

// Interfaces
import type { EmployeeProps } from "../../interfaces/EmployeeProps";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error("Erro ao buscar funcionários:", err);
      setError("Não foi possível carregar os funcionários. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <EmployeeTableWrapper data={employees} />
    </Container>
  );
}

export default EmployeeList;
