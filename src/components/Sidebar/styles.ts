// External Libraries
import { styled } from "@mui/material/styles";
import { Drawer, ListItemText } from "@mui/material";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 280,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRight: `1px dashed ${theme.palette.divider}`,
    marginTop: "80px",

    [theme.breakpoints.down(1024)]: {
      width: "100%",
      position: "fixed",
      zIndex: theme.zIndex.drawer + 1,
    },
  },
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  textAlign: "left",
  paddingLeft: theme.spacing(2),
  color: theme.palette.text.secondary,
  
  [theme.breakpoints.down(1024)]: {
    textAlign: "center",
    paddingLeft: 0,
    paddingRight: 0,
  },
}));