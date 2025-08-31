// External Libraries
import MenuIcon from "@mui/icons-material/Menu";

// Interfaces
import type { HeaderProps } from "../../interfaces/HeaderProps";

// Assets
import logo from "../../assets/flugo.svg";

// Styles
import { StyledAppBar, StyledToolbar, StyledIconButton } from "./styles";

const Header = (props: HeaderProps) => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledIconButton onClick={props.onMenuClick}>
          <MenuIcon />
        </StyledIconButton>
        <img src={logo} alt="Logo" />
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;