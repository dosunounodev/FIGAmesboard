import styled from "styled-components";

const MainContainer = styled.main`
  position: relative;
  top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: calc(100vh - 150px);
  @media screen and (min-width: 768px) {
    top: 55px;
    left: 50px;
    width: calc(100% - 50px);
    min-height: calc(100vh - 55px);
  }
`;

export { MainContainer };
