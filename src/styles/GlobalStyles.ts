import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
`;