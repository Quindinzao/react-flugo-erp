// External Libraries
import { Box, LinearProgress, Typography, styled } from "@mui/material";

export const StatusBarContainer = styled(Box)(() => ({
  width: "100%",
  marginBottom: "16px",
  marginTop: "12px",
}));

export const ProgressContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

export const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 4,
  backgroundColor: theme.palette.success.contrastText,
  "& .MuiLinearProgress-bar": {
    borderRadius: 4,
  },
}));

export const ProgressText = styled(Typography)(() => ({
  minWidth: 40,
  textAlign: "right",
}));