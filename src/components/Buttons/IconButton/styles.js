import styled from "styled-components";
import { NavLink } from "react-router-dom";

const IconButtonLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 3.5rem;
  color: #1c1e21;
  text-decoration: none;
  transition: color 0.3s linear;
  &:hover {
    color: #764abc;
  }
`;

export { IconButtonLink };
