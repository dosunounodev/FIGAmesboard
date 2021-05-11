import React from "react";
import { IconButtonLink } from "./styles";

const IconButton = ({ icon, to }) => {
  return (
    <IconButtonLink
      exact
      to={to}
      activeStyle={{
        color: "#764abc",
      }}
    >
      <i className={icon} />
    </IconButtonLink>
  );
};

export default IconButton;
