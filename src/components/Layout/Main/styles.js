import styled from "styled-components";

const MainContainer = styled.main`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 180px);
  padding: 20px;
  background-color: #fff;
  @media screen and (min-width: 620px) {
    top: 50px;
    min-height: calc(100vh - 100px);
  }
`;

export { MainContainer };
