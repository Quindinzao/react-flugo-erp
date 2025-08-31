// External Libraries
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  type SelectChangeEvent
} from "@mui/material";
import { Controller } from "react-hook-form";

// Interfaces
import type { DropBoxProps } from "../../interfaces/DropBoxProps";

const DropBox = (props: DropBoxProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{ required: props.required }}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error}>
          <InputLabel id={props.labelId}>{props.label}</InputLabel>
          <Select
            labelId={props.labelId}
            label={props.label}
            value={field.value}
            onChange={(e: SelectChangeEvent) => field.onChange(e.target.value)}
          >
            {props.items.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <Typography 
              variant="caption" 
              color="error"
              ml={2}
              mt={0.25}
            >
              {fieldState.error.message}
            </Typography>
          )}
        </FormControl>
      )}
    />
  );
}

export default DropBox;