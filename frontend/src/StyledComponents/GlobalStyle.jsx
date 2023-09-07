import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #669bbc;
    --error: #e7195a;
  }
  body {
    background: #f2e9e4;
    margin: 0;
    font-family: 'Poppins', cursive;
  }
  header {
    background: #282459;
  }
`;

export default GlobalStyles;