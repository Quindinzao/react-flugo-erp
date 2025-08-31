// External Libraries
import { createTheme } from "@mui/material/styles";

// Styles
import { globalStyles } from "../globalStyles";

export const darkTheme = createTheme({
  ...globalStyles,
  palette: {
    mode: "dark",
    primary: {
      main: "#22C55E",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
      disabled: "#919EABCC",
    },
    info: {
      main: "#323336"
    },
    error: {
      main: "#FF5252",
      contrastText: "#FF563029",
    },
    success: {
      main: "#118D57",
      contrastText: "##DCF6E5",
    },
  }
});