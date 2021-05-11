import styled from "styled-components";

const SideNavNar = styled.nav`
  position: fixed;
  top: 100px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px 0;
  background-color: #1c1e21;
  section {
    display: flex;
    p {
      display: none;
    }
    div {
      display: flex;
    }
  }
  i {
    margin: 0 2px;
  }

  @media screen and (min-width: 768px) {
    top: 55px;
    flex-direction: column;
    justify-content: center;
    width: 50px;
    height: calc(100% - 55px);
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      div {
        flex-direction: column;
        margin-bottom: 50px;
      }
      div:last-child {
        margin-bottom: 0px;
      }
      p {
        display: flex;
        margin: 0;
        margin-bottom: 10px;
        padding: 0;
        font-size: 1.8rem;
        line-height: 2.2;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        color: #fff;
        cursor: default;
      }
    }
    section:last-child {
      height: auto;
    }
  }
`;

export { SideNavNar };
