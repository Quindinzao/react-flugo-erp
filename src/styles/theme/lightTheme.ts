// External Libraries
import { createTheme } from "@mui/material/styles";

// Styles
import { globalStyles } from "../globalStyles";

export const lightTheme = createTheme({
  ...globalStyles,
  palette: {
    mode: "light",
    primary: {
      main: "#22C55E",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F4F6F8",
    },
    text: {
      primary: "#212B36",
      secondary: "#637381",
      disabled: "#919EABCC",
    },
    info: {
      main: "#DFE3E8"
    },
    error: {
      main: "#B71D18",
      contrastText: "#FF563029",
    },
    success: {
      main: "#118D57",
      contrastText: "#22C55E29",
    },
  },
});