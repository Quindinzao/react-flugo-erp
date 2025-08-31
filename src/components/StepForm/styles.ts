// External Libraries
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "100%",
  flexDirection: "row",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: "24px",
  color: theme.palette.text.secondary,
}));

export const StepFields = styled(Box)(() => ({
  width: "100%",
}));

export const StepContent = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "24px",
}));

export const Actions = styled(Box)(() => ({
  marginTop: "100px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
}));