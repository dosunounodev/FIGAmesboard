import React from "react";
import { StyledLinkButton } from "./styles";

const LinkButton = ({ to, children }) => {
  return <StyledLinkButton to="/games/add">{children}</StyledLinkButton>;
};

export default LinkButton;
