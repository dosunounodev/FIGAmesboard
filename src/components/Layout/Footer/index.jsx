import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        <Link to="/home">
          <strong>FIGAmes</strong>
          board
        </Link>{" "}
        🗃 Collection Tracker
      </p>
      <p>
        Made with 💜 by{" "}
        <strong>
          <a
            href="https://github.com/dosunounodev"
            target="_blank"
            rel="noreferrer"
          >
            dosunouno.dev
          </a>
        </strong>
      </p>
    </FooterContainer>
  );
};

export default Footer;
