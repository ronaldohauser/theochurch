import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Altura mínima da tela */
    font-family: 'Poppins', sans-serif; /* Aplica a fonte Poppins */
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
