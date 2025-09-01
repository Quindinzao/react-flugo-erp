// External Libraries
import { useFormContext } from "react-hook-form";
import { Box } from "@mui/material";

// Components
import TextInput from "../../../../components/TextInput";

const LoginForm = () => {;
  const { control, formState: { errors } } = useFormContext();

  return (
    <Box display="flex" flexDirection="column" gap={"24px"}>
      <TextInput 
        name="email" 
        control={control} 
        label="E-mail" 
        required="Por favor, preencha o campo com o e-mail do administrador."
        pattern={{ value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" }}
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextInput 
        name="password" 
        control={control} 
        label="Senha" 
        required="Por favor, preencha o campo com senha."
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
        type="password" // importante para senha
      />
    </Box>
  );
};

export default LoginForm;
