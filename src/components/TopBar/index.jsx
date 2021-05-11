import React from "react";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import { Header } from "./styles";

const TopBar = () => {
  return (
    <Header>
      <Logo />
      <SearchInput />
    </Header>
  );
};

export default TopBar;
