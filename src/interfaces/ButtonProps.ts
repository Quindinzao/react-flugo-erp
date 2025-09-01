export interface ButtonProps {
  onClick: () => void;
  title: string;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  fullWidth?: boolean;
}