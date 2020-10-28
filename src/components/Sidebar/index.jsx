import React from "react";

import { SidebarContainer, LogoContainer, Navbar } from "./styles";

const Sidebar = () => {

  return (
    <SidebarContainer>
      <div className="sidebarHeader">
        <span>SLACA 2019</span>
      </div>
      <LogoContainer />
      <Navbar>
        <li>Apresentação</li>
        <li>Comitês</li>
        <li>Autores</li>
        <li>Eixos temáticos</li>
        <li>Trabalhos</li>
        <li>Contato</li>
      </Navbar>
    </SidebarContainer>
  );
};

export default Sidebar;
