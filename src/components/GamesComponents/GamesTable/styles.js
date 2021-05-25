import styled from "styled-components";

const GamesForm = styled.form`
  width: 100%;
  table td {
    background-color: #b5a0d9;
    height: 100px;
  }
  input,
  select,
  textarea {
    width: 90%;
    height: 90%;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    background-color: #fafafa;
    border: 2px solid #764abc;
    border-radius: 5px;
    resize: none;
  }

  input[type="date"] {
    font-size: 1.2rem;
  }

  input[type="checkbox"] {
    width: 30px;
    height: 30px;
  }
`;

const GamesTable = styled.table`
  width: 100%;
  thead {
  }

  th {
    padding: 10px 0;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: white;
    background-color: #764abc;
    border-radius: 10px;
  }

  td {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
  }

  .franchises,
  .description {
    padding: 0 10px;
  }

  .owned,
  .finished,
  .available {
    font-size: 1.8rem;
  }

  button {
    margin: 2px 0;
    padding: 8px;
    font-size: 1.6rem;
    background-color: #fff;
    border: 2px solid #764abc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s linear;

    :hover {
      background-color: #764abc;
    }
  }
`;

const GamesRow = styled.tr`
  display: grid;
  grid-gap: 3px;
  grid-template-columns:
    2fr 120px 120px 80px 80px 3fr 120px 70px
    120px 80px 80px 80px 80px 80px;
  td {
    transition: background-color 0.3s linear;
  }
  &:hover td {
    font-weight: bold;
    background-color: #b5a0d9;
    cursor: pointer;
  }
`;

export { GamesForm, GamesTable, GamesRow };
