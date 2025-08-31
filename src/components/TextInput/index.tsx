// External Libraries
import { Controller } from "react-hook-form";

// Interfaces
import type { TextInputProps } from "../../interfaces/TextInputProps";

// Styles
import { StyledTextField } from "./styles";

const TextInput = (props: TextInputProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{
        required: props.required,
        pattern: props.pattern,
      }}
      render={({ field }) => (
        <StyledTextField
          {...field}
          label={props.label}
          fullWidth={props.fullWidth}
          error={props.error}
          helperText={props.helperText}
        />
      )}
    />
  );
}

export default TextInput;