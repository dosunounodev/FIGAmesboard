import React, { useState } from "react";
import Logo from "components/Layout/Header/Logo";
import TopNavBar from "components/Layout/Header/TopNavBar";
import SearchInput from "components/Layout/Header/SearchInput";
import { HeaderContainer } from "./styles";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <HeaderContainer>
      <Logo />
      <TopNavBar active={active} setActive={setActive} />
      <SearchInput active={active} setActive={setActive} />
    </HeaderContainer>
  );
};

export default Header;
