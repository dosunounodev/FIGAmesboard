import React from "react";
import Logo from "components/Logo";
import SearchInput from "components/SearchInput";
import { HeaderContainer } from "./styles";

const TopBar = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchInput />
    </HeaderContainer>
  );
};

export default TopBar;
