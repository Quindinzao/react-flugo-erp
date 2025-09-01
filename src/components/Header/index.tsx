// External Libraries
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { Box } from "@mui/material";

// Components
import Switch from "../Switch";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

// Interfaces
import type { HeaderProps } from "../../interfaces/HeaderProps";

// Assets
import logo from "../../assets/flugo.svg";

// Styles
import { StyledAppBar, StyledToolbar, StyledIconButton } from "./styles";

const Header = (props: HeaderProps) => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Box display="flex" alignItems="center">
          <StyledIconButton onClick={props.onMenuClick}>
            <MenuIcon />
          </StyledIconButton>

          <img src={logo} alt="Logo" />
        </Box>
        <Box display="flex" alignItems="center">
          <Switch
            checked={mode === "dark"}
            onChange={toggleTheme}
            label={mode === "dark" ? "Escuro" : "Claro"}
          />
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
