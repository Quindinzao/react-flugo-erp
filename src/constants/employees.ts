// Components
import Step1 from "../pages/EmployeeForm/components/Step1";
import Step2 from "../pages/EmployeeForm/components/Step2";

export const EMPLOYEE_FORM = [
  { title: "Infos Básicas", content: Step1 },
  { title: "Infos Profissionais", content: Step2 },
];

export const EMPLOYEE_DEFAULT_VALUE = {
  name: "",
  email: "",
  department: "",
  status: "Ativo"
}

export const EMPLOYEE_COLUMN_HEADER = [
  { name: "Nome" },
  { name: "Email" },
  { name: "Departamento" },
  { name: "Status", align: "right" as const },
];

export const DEPARTMENTS = [
  "Recursos Humanos",
  "Tecnologia da Informação",
  "Financeiro",
  "Marketing",
  "Vendas",
  "Operações"
];