import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
  position: relative;
  margin: 0px;
  padding: 0;
}

table:nth-child(even) td {
  background-color: #f5f6f7;
}
table:nth-child(odd) td {
  background-color: rgb(255, 255, 255);
}

`;

export default GlobalStyle;
