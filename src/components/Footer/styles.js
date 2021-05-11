import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: auto;
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
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export { FooterContainer };
