import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 2px solid #f5f6f7;
  @media screen and (min-width: 620px) {
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
  }
`;

export { HeaderContainer };
