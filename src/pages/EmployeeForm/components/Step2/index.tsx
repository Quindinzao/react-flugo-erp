// External Libraries
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

// Components
import DropBox from "../../../../components/DropBox";

// Constants
import { DEPARTMENTS as departments } from "../../../../constants/employees";

const Step2 = () => {
  const { control } = useFormContext();

  return (
    <Box>
      <DropBox
        name="department"
        control={control}
        label="Selecione um departamento"
        id="department-select"
        labelId="department-label"
        items={departments}
        required="Por favor, selecione o departamento."
      />
    </Box>
  );
}

export default Step2;