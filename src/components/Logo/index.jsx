import React from "react";
import { LogoHeader } from "./styles";

const Logo = () => {
  return (
    <>
      <LogoHeader to="/">
        <h1>
          <i className="fas fa-cubes"></i> FIGAmes<span>board</span>
        </h1>
      </LogoHeader>
    </>
  );
};

export default Logo;
