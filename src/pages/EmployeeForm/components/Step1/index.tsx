// External Libraries
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";

// Components
import TextInput from "../../../../components/TextInput";
import Switch from "../../../../components/Switch";

const Step1 = () => {
  const { control, formState: { errors }, setValue, watch } = useFormContext();

  const statusValue = watch("status");

  const [isChecked, setIsChecked] = useState(statusValue === "Ativo");

  useEffect(() => {
    setIsChecked(statusValue === "Ativo");
  }, [statusValue]);

  const handleSwitchChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    setValue("status", newChecked ? "Ativo" : "Inativo", { shouldValidate: true });
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextInput 
        name="name" 
        control={control} 
        label="Nome completo" 
        required="Por favor, preencha o campo com nome completo."
        fullWidth
        error={!!errors.name}
        helperText={errors.name?.message as string | undefined}
      />
      <TextInput 
        name="email" 
        control={control} 
        label="E-mail" 
        required="Por favor, preencha o campo com o e-mail do funcionário."
        pattern={{ value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" }}
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message as string | undefined}
      />
      <Switch
        label="Ativar ao criar"
        checked={isChecked}
        onChange={handleSwitchChange}
      />
    </Box>
  );
}

export default Step1;