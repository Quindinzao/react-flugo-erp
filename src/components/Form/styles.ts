// External Libraries
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Button from "../Button";

export const Container = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Content = styled(Box)(({ theme }) => ({
  width: "50%",
  flexDirection: "row",

  [theme.breakpoints.down(768)]: {
    width: "100%"
  }
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: "24px",
  color: theme.palette.text.secondary,
}));

export const StyledButton = styled(Button)({
  marginTop: "24px"
})

export const Actions = styled(Box)(() => ({
  marginTop: "24px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
}));