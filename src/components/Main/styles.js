import styled from "styled-components";

const MainContainer = styled.main`
  position: relative;
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 230px);
  padding-bottom: 20px;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    top: 55px;
    left: 50px;
    width: calc(100% - 50px);
    min-height: calc(100vh - 105px);
  }
`;

export { MainContainer };
