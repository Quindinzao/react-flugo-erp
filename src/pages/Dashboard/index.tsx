/* eslint-disable @typescript-eslint/no-explicit-any */
// External Libraries
import { useEffect, useState } from "react";

// Components
import Layout from "../../components/Layout";
import EmployeeStatusChart from "./components/EmployeeStatusChart";
import LoadingErrorWrapper from "../../components/LoadingError";

// Services
import { getEmployees } from "../../services/employeeService";

// Interfaces
import type { EmployeeProps } from "../../interfaces/EmployeeProps";

const Dashboard = () => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = [
    { name: "Ativos", value: employees.filter(emp => emp.status === "Ativo").length },
    { name: "Inativos", value: employees.filter(emp => emp.status === "Inativo").length }
  ];

  return (
    <Layout>
      <LoadingErrorWrapper loading={loading} error={error}>
        <EmployeeStatusChart chartData={chartData} />
      </LoadingErrorWrapper>
    </Layout>
  );
};

export default Dashboard;
