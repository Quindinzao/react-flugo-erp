// External Libraries
import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    filter: "brightness(0.9)",
  },
  "&.MuiButton-contained": {
    color: theme.palette.background.paper,
    ":disabled": {
      color: theme.palette.text.primary,
    },
  },
  "&.MuiButton-text": {
    color: theme.palette.text.primary,
    ":disabled": {
      color: theme.palette.text.disabled,
    },
  },
}));