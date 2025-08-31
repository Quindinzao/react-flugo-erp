// External Libraries
import { Fragment } from "react";

// Components
import StepItem from "../StepItem";

// Styles
import { Container, Connector } from "./styles";

// Interfaces
import type { StepIndicatorProps } from "../../interfaces/StepProps";

const StepIndicator = (props: StepIndicatorProps) => {
  return (
    <Container>
      {props.steps.map((step, index) => (
        <Fragment key={step.stepNumber ?? index}>
          {index > 0 && <Connector sx={{ height: index > props.currentStep ? 104 : 24 }} />}
          <StepItem
            stepNumber={step.stepNumber}
            label={step.label}
            isActive={index === props.currentStep}
            isCompleted={index < props.currentStep}
          />
        </Fragment>
      ))}
    </Container>
  );
}

export default StepIndicator;