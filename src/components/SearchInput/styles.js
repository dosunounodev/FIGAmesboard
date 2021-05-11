import styled from "styled-components";

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 280px;
  input {
    margin-right: 10px;
    width: 100%;
    height: 35px;
    padding: 0 10px;
    font-size: 1.4rem;
    color: #764abc;
    border: 2px solid #764abc;
    border-radius: 5px;
  }

  button {
    width: 40px;
    height: 35px;
    padding: 0 10px;
    font-weight: bold;
    color: #fff;
    background-color: #b5a0d9;
    border: 2px solid #764abc;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    i {
      font-size: 1.4rem;
    }
  }
`;

export { SearchForm };
