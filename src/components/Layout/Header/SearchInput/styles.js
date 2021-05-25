import styled, { css } from "styled-components";

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 280px;
  height: 40px;
  input {
    margin-right: 10px;
    width: 230px;
    height: 40px;
    padding: 0 10px;
    font-size: 1.4rem;
    color: #764abc;
    border: 2px solid #764abc;
    border-radius: 5px;
    text-align: center;
  }

  button {
    display: none;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 0;
    color: #fff;
    background-color: #b5a0d9;
    border: 2px solid #764abc;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s linear;
    will-change: background-color;
    i {
      font-size: 1.6rem;
    }
    &:hover {
      background-color: #764abc;
    }
    @media screen and (min-width: 920px) {
      display: flex;
    }
  }
`;

const TogglerButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  font-weight: bold;
  color: #fff;
  background-color: #b5a0d9;
  border: 2px solid #764abc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s linear;
  will-change: background-color;
  &:hover {
    background-color: #764abc;
  }
  @media screen and (min-width: 920px) {
    display: none;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: #764abc;
      &:hover {
        background-color: #b5a0d9;
      }
    `}
`;

export { SearchForm, TogglerButton };
