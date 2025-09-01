// External Libraries
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

// Interfaces
import type { TextInputProps } from "../../interfaces/TextInputProps";

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
        <TextField
          {...field}
          label={props.label}
          fullWidth={props.fullWidth}
          error={props.error}
          helperText={props.helperText}
          type={props.type}
        />
      )}
    />
  );
}

export default TextInput;