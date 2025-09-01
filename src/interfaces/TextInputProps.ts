/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TextInputProps {
  name: string;
  control: any;
  label: string;
  required?: string;
  pattern?: { value: RegExp; message: string };
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string | any;
  type?: "password"
}