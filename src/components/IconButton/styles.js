import styled from "styled-components";
import { NavLink } from "react-router-dom";

const IconButtonLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  font-size: 3rem;
  color: #fff;
  text-decoration: none;
  transition: 0.3s linear color;
  &:hover {
    color: #764abc;
  }
`;

export { IconButtonLink };
