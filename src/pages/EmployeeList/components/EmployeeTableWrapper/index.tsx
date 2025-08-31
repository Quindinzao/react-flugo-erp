// External Libraries
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Components
import Table from "../../../../components/Table";
import Button from "../../../../components/Button";

// Interfaces
import type { EmployeeTableProps } from "../../../../interfaces/EmployeeProps";

// Constants
import { EMPLOYEE_COLUMN_HEADER as employeeColumnHeader } from "../../../../constants/employees";

const EmployeeTableWrapper = (employees: EmployeeTableProps) => {
  const navigate = useNavigate();
  const columnBody = employees.data.map((employee) => ({
    rows: [
      { value: employee.name, type: "avatar" as const },
      { value: employee.email },
      { value: employee.department },
      { value: employee.status, type: "badge" as const, align: "right" as const },
    ],
  }));

  return (
    <Box>
      <Box mt={4} mb={2} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Lista de Funcionários
        </Typography>
        <Button
          variant="contained"
          title="Adicionar Funcionário"
          onClick={() => navigate("/employees/add")}
        />
      </Box>
      <Table columnBody={columnBody} columnHeader={employeeColumnHeader} />
    </Box>
  );
}

export default EmployeeTableWrapper;