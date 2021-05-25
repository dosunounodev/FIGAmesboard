import styled, { css } from "styled-components";

const TopNavBarContainer = styled.nav`
  display: none;
  justify-content: space-around;
  width: 280px;
  height: 40px;

  @media screen and (min-width: 920px) {
    display: flex;
    width: 280px;
  }

  @media screen and (max-width: 919px) {
    position: fixed;
    top: 100px;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #b5a0d9;
    transition: transform 0.5s linear, opacity 0.5s linear;
    a:hover {
      color: #fff;
    }
    ${(props) =>
      !props.active &&
      css`
        transform: translateX(100%);
        opacity: 0;
      `}
    @media screen and (min-width:620px) {
      top: 50px;
    }
  }
`;

export { TopNavBarContainer };
