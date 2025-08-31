// External Libraries
import { useState } from "react";
import { Toolbar } from "@mui/material";

// Components
import Header from "../Header";
import Sidebar from "../Sidebar";

// Interfaces
import type { LayoutProps } from "../../interfaces/LayoutProps";

// Styles
import { Main } from "./styles";

const Layout = (props: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleMenuClick = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Sidebar open={sidebarOpen} />
      <Header onMenuClick={handleMenuClick} />
      <Main sidebarOpen={sidebarOpen}>
        <Toolbar />
        {props.children}
      </Main>
    </>
  );
}

export default Layout;