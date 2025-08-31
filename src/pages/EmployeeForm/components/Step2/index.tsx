import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

// Components
import DropBox from "../../../../components/DropBox";

const Step2 = () => {
  const { control } = useFormContext();

  const departments = [
    "Recursos Humanos",
    "Tecnologia da Informação",
    "Financeiro",
    "Marketing",
    "Vendas",
    "Operações"
  ];

  return (
    <Box>
      <DropBox
        name="department"
        control={control}
        label="Selecione um departamento"
        id="department-select"
        labelId="department-label"
        items={departments}
        required="Por favor, selecione o departamento." // <-- mensagem obrigatória
      />
    </Box>
  );
}

export default Step2;