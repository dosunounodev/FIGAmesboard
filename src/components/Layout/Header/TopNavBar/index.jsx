import React from "react";
import IconButton from "components/Buttons/IconButton";
import { TopNavBarContainer } from "./styles";

const TopNavBar = ({ active, setActive }) => {
  const handleClickMenu = (e) => {
    e.target.classList.contains("fas") && setActive((prevState) => !prevState);
  };

  return (
    <TopNavBarContainer onClick={handleClickMenu} active={active}>
      <IconButton icon="fas fa-gamepad" to="/games" />
      <IconButton icon="fas fa-star" to="/franchises" />
      <IconButton icon="fas fa-cube" to="/consoles" />
      <IconButton icon="fas fa-plus-circle" to="/add" />
      <IconButton icon="fas fa-layer-group" to="/addbatch" />
      <IconButton icon="fas fa-cog" to="/settings" />
    </TopNavBarContainer>
  );
};

export default TopNavBar;
