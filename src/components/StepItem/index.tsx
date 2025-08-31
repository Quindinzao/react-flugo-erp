// Styles
import { Container, StepAvatar, StepLabel } from "./styles";

// Interfaces
import type { StepItemProps } from "../../interfaces/StepProps";

const StepItem = (props: StepItemProps) => {
  const isDone = props.isActive || props.isCompleted;

  return (
    <Container>
      <StepAvatar isDone={isDone}>
        {props.stepNumber}
      </StepAvatar>
      <StepLabel isDone={isDone} variant="subtitle2">
        {props.label}
      </StepLabel>
    </Container>
  );
}

export default StepItem;