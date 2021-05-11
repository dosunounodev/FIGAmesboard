import React from "react";
import LinkButton from "../components/LinkButton";
import { LogoHeader } from "../components/Logo/styles";
import { Header } from "./HomeStyles";

const HomePage = () => {
  return (
    <>
      <Header>
        <LogoHeader to="/">
          <h2>
            <i className="fas fa-cubes"></i> FIGAmes<span>board</span>
          </h2>
        </LogoHeader>
        <p>Video Game Collection Tracker</p>
        <LinkButton to="/games/add">Add a Game</LinkButton>
      </Header>
    </>
  );
};

export default HomePage;
