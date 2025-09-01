 
// External Libraries
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Components
import LoginForm from "./components/LoginForm";
import Form from "../../components/Form";

// Contexts
import { useAuth } from "../../contexts/AuthContext";

// Constants
import { LOGIN_DEFAULT_VALUE as loginDefaultValue } from "../../constants/auth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate()

  const handleLogin = async (data: {email: string, password: string}) => {
    try {
      await login(data.email, data.password);
      alert("Login realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <Container>
      <Form
        buttonTitle="Entrar"
        title="Login"
        onSubmit={handleLogin}
        defaultValue={loginDefaultValue}
      >
        <LoginForm />
      </Form>
    </Container>
  );
};

export default Login;
