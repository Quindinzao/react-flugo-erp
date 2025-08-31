// External Libraries
import { FormControlLabel } from "@mui/material";

// Interfaces
import type { SwitchProps } from "../../interfaces/SwitchProps";

// Styles
import { StyledSwitch } from "./styles";

const Switch = (props: SwitchProps) => {
  return (
    <FormControlLabel
      control={
        <StyledSwitch
          onChange={props.onChange}
          checked={props.checked}
        />
      }
      label={props.label}
    />
  );
}

export default Switch;
