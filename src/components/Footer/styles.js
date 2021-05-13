import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;
  top: 150px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #764abc;
  p {
    margin: 3px;
    color: #fff;
    text-align: center;
    span {
      font-weight: 700;
    }
  }
  @media screen and (min-width: 768px) {
    top: 55px;
    left: 50px;
    width: calc(100% - 50px);
    height: 50px;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export { FooterContainer };
