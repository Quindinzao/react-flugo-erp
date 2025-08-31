// External Libraries
import { styled, Box } from "@mui/material";

// External Libraries
import type { StyledLayoutProps } from "../../interfaces/LayoutProps";

export const Main = styled(Box, {
  shouldForwardProp: (prop) => prop !== "sidebarOpen",
})<StyledLayoutProps>((props) => ({
  padding: "24px",
  transition: "margin-left 0.3s",
  marginLeft: props.sidebarOpen ? "280px" : "0px",
}));