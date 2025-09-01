/* eslint-disable react-refresh/only-export-components */
// External Libraries
import { createContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Styles
import { lightTheme } from "../styles/theme/lightTheme";
import { darkTheme } from "../styles/theme/darkTheme";

// Interfaces
import type { ThemeContextProps } from "../interfaces/ThemeContextProps";

export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  mode: "light",
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") setMode(saved);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};