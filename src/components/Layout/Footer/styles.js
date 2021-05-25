import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;
  top: 100px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #764abc;
  @media screen and (min-width: 620px) {
    top: 50px;
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
  }

  p {
    font-size: 1.4rem;
    margin: 0;
    color: #fff;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s linear;
    will-change: color;
    &:hover {
      color: #1c1e21;
    }
  }
`;

export { FooterContainer };
