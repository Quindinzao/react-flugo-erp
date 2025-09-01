// External Libraries
import { useEffect, useState } from "react";

// Components
import EmployeeTableWrapper from "./components/EmployeeTableWrapper";
import Layout from "../../components/Layout";

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
    <Layout>
      <EmployeeTableWrapper data={employees} />
    </Layout>
  );
}

export default EmployeeList;
