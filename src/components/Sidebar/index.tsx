// External Libraries
import { List, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

// Interfaces
import type { SidebarProps } from "../../interfaces/SidebarProps";

// Constants
import { MENU_ITEMS as menuItems } from "../../constants/menuItems";

// Styles
import { StyledDrawer, StyledListItemText } from "./styles";

const Sidebar = (props: SidebarProps) => {
  return (
    <StyledDrawer variant="persistent" anchor="left" open={props.open}>
      <List>
      {menuItems.map((item) => (
        <ListItemButton
          key={item.id}
          component={Link}
          to={item.path}
        >
          {item.image && <img src={item.image} alt={item.text} />}
          <StyledListItemText primary={item.text} />
        </ListItemButton>
      ))}
      </List>
    </StyledDrawer>
  );
}

export default Sidebar;