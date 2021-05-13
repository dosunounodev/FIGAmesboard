import React from "react";
import { StyledLinkButton } from "./styles";

const LinkButton = ({ to, children }) => {
  return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
};

export default LinkButton;
