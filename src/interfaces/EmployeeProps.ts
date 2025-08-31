export interface EmployeeProps {
  id?: string;
  name: string;
  email: string;
  department: string;
  status: string;
}

export interface EmployeeTableProps {
  data: EmployeeProps[];
}