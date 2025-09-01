// External Libraries
import { useForm, FormProvider } from "react-hook-form";

// Styles
import { Actions, Container, Content, StyledButton, Title } from "./styles";

// Interfaces
import type { FormProps } from "../../interfaces/FormProps";

const Form = (props: FormProps) => {
  const methods = useForm({
    defaultValues: props.defaultValue,
    mode: "onBlur",
  });

  const handleSubmit = methods.handleSubmit((data) => {
    if (props.onSubmit) props.onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <Container display="flex" flexDirection="column" gap={2}>
        <Content>
          <Title variant="h4">{props.title}</Title>
  
          {props.children}  

          <Actions>
            <StyledButton
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              title={props.buttonTitle}
            />
          </Actions>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default Form;
