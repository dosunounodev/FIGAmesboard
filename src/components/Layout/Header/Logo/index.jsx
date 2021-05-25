import React from "react";
import { LogoContainer } from "./styles";

const Logo = () => {
  return (
    <>
      <LogoContainer to="/">
        <h1>
          <i className="fas fa-cubes"></i> FIGAmes<span>board</span>
        </h1>
      </LogoContainer>
    </>
  );
};

export default Logo;
