 
// External Libraries
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

// Components
import StepIndicator from "../StepIndicator";
import Button from "../Button";
import StatusBar from "../StatusBar";
import Path from "../Path";

// Constants
import { PATH_NAMES as pathNames } from "../../constants/pathNames";

// Styles
import { Container, Title, StepContent, Actions, StepFields } from "./styles";

// Interfaces
import type { StepFormProps } from "../../interfaces/StepProps";

const StepForm = (props: StepFormProps) => {
  const [step, setStep] = useState(0);

  const methods = useForm({
    defaultValues: props.defaultValue,
    mode: "onBlur",
  });

  const nextStep = async () => {
    const valid = await methods.trigger();
    if (valid) setStep((prev) => prev + 1);
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const finalStep = methods.handleSubmit((data) => {
    if (props.onFinish) props.onFinish(data);
    else alert(JSON.stringify(data, null, 2));
  });

  const StepComponent = props.steps[step].content;

  return (
    <FormProvider {...methods}>
      <Container>
        <Path pathNames={pathNames} />
        <StatusBar
          currentStep={step}
          totalSteps={props.steps.length}
        />
        <StepContent>
          <StepIndicator
            steps={props.steps.map((s, index) => ({
              stepNumber: index + 1,
              label: s.title,
            }))}
            currentStep={step}
          />
          <StepFields>
            <Title variant="h4">{props.steps[step].title}</Title>
            <StepComponent />
            <Actions>
              <Button onClick={prevStep} title="Voltar" disabled={step === 0} />
              <Button
                variant="contained"
                onClick={step === props.steps.length - 1 ? finalStep : nextStep}
                title={step === props.steps.length - 1 ? "Finalizar" : "Próximo"}
              />
            </Actions>
          </StepFields>
        </StepContent>
      </Container>
    </FormProvider>
  );
}

export default StepForm;