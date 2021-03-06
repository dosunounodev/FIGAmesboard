import { createGlobalStyle } from 'styled-components';

const TypoStyle = createGlobalStyle`

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #1c1e21;
}

h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
  text-align: center;
}

h1 {
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 1;
}

h2 {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;
  span {
    font-size: 1em;
    color: #764abc;
    span {
      font-size: 0.6em;
      color: #1c1e21;
      span {
        font-size: 1em;

        color: #764abc;
      }
    }
  }
}

h3 {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1;
}

h4 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

p {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6;
}

strong {
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1.5;
}

small {
  font-size: 0.75em;
  font-weight: 400;
  line-height: 1.5;
}

`;

export default TypoStyle;
