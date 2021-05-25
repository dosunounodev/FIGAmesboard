import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 280px;
  height: 40px;
  text-decoration: none;
  h1 {
    color: #764abc;
    transition: color 0.3s linear;
  }
  i,
  span {
    color: #b5a0d9;
    transition: color 0.3s linear;
  }
  span {
    font-size: 0.8em;
    font-weight: 400;
  }
  :hover {
    h1 {
      color: #b5a0d9;
    }
    i,
    span {
      color: #764abc;
    }
  }
`;

export { LogoContainer };
