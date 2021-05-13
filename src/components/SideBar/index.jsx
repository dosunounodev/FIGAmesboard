import React from "react";
import IconButton from "components/IconButton/";
import { SideBarContainer } from "./styles";

const SideBar = () => {
  return (
    <SideBarContainer>
      <section>
        <div>
          <p>Games</p>
          <IconButton icon="fas fa-gamepad" to="/games" />
          <IconButton icon="fas fa-plus-circle" to="/games/add" />
          <IconButton icon="fas fa-layer-group" to="/games/addbatch" />
        </div>
        <div>
          <p>Consoles</p>
          <IconButton icon="fas fa-cube" to="/consoles" />
          <IconButton icon="fas fa-plus-circle" to="/consoles/add" />
        </div>
        <div>
          <p>Franchises</p>
          <IconButton icon="fas fa-star" to="/franchises" />
          <IconButton icon="fas fa-plus-circle" to="/franchises/add" />
        </div>
      </section>
      <section>
        <IconButton icon="fas fa-cog" to="/settings" />
      </section>
    </SideBarContainer>
  );
};

export default SideBar;
