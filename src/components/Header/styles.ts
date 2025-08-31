// External libraries
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  color: "transparent",
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.default,
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledIconButton = styled(IconButton)(() => ({
  marginRight: "16px",
}));