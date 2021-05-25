import styled from "styled-components";

const GamesWidgetsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const GamesCard = styled.article`
  display: flex;
  flex: 1 0 280px;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px;
  padding: 10px 20px;
  color: #fff;
  background-color: #1c1e21;
  border-radius: 10px;

  span {
    align-self: center;
    width: 60px;
    font-size: 4rem;
  }

  .DataContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 60px);
    height: 100%;
  }

  h3 {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    color: #764abc;
    background-color: #fff;
    border-radius: 10px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    li {
      width: 50%;
      padding: 5px;
      /* margin: 5px; */
      text-align: center;
      span {
        font-size: 1.2em;
        font-weight: bold;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    div {
      display: flex;
      justify-content: space-between;
    }
    div:first-child {
      margin-bottom: 10px;
    }
    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 80px;
      height: 40px;
      margin-right: 5px;
      font-size: 1.4rem;
      text-align: center;
    }
  }

  select,
  input {
    width: calc(100% - 85px);
    height: 40px;
    padding: 5px 10px;
    font-size: 1.6rem;
    background-color: #fff;
    border: 2px solid #764abc;
    border-radius: 10px;
  }

  p {
    display: inline-block;
    width: 50%;
    text-align: center;
    span {
      font-size: 1.2em;
      font-weight: bold;
    }
  }
`;

export { GamesWidgetsContainer, GamesCard };
