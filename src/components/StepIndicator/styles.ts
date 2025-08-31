// External Libraries
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: '180px',
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down(1024)]: {
    width: '32px'
  }
})); 

export const Connector = styled(Box)(({ theme }) => ({
  width: 1,
  marginLeft: theme.spacing(1.4),
  marginY: theme.spacing(1),
  backgroundColor: theme.palette.text.disabled,
}));