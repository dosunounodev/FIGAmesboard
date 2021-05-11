import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 10px 0;
  background-color: #fff;
  border-bottom: 2px solid #f5f6f7;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 55px;
    padding: 10px;
  }
`;

export { Header };
