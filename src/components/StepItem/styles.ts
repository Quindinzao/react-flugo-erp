// External Libraries
import { styled } from "@mui/material/styles";
import { Box, Avatar, Typography } from "@mui/material";

// Interfaces
import type { StepAvatarProps } from "../../interfaces/StepProps";

export const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
}));

export const StepAvatar = styled(Avatar)<StepAvatarProps>(({ theme, isDone }) => ({
  backgroundColor: isDone ? theme.palette.primary.main : theme.palette.info.main,
  color: isDone ? theme.palette.common.white : theme.palette.text.disabled,
  width: 24,
  height: 24,
  fontSize: 14,
  fontWeight: 500,
}));

export const StepLabel = styled(Typography)<{ isDone: boolean }>(({ theme, isDone }) => ({
  fontWeight: 600,
  color: isDone ? theme.palette.text.primary : theme.palette.text.disabled,
  [theme.breakpoints.down(1024)]: {
    display: "none"
  }
}));