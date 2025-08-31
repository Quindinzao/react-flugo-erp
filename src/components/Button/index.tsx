// Interfaces
import type { ButtonProps } from "../../interfaces/ButtonProps";

// Styles
import { StyledButton } from "./styles";

const Button = (props: ButtonProps) => {
  return (
    <StyledButton 
      variant={props.variant ?? "text"}
      onClick={props.onClick}
      disabled={props.disabled ?? false}
    >
      {props.title}
    </StyledButton>
  );
}

export default Button;