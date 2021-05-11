import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoHeader = styled(Link)`
  text-decoration: none;
  h1,
  h2 {
    color: #764abc;
    transition: color 0.3s linear;
  }
  i,
  span {
    color: #b5a0d9;
    transition: color 0.3s linear;
  }
  span {
    font-size: 0.7em;
  }
  :hover {
    i,
    span {
      color: #764abc;
    }
    h1 {
      color: #b5a0d9;
    }
  }
  h2 {
    font-size: 3.6rem;
    color: #fff;
    :hover {
      color: #b5a0d9;
      i,
      span {
        color: #fff;
      }
    }
    @media screen and (min-width: 768px) {
      font-size: 6rem;
    }
  }
`;

export { LogoHeader };
