import { createGlobalStyle } from 'styled-components';
import { primary, black, white } from './variaveis';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  html {
    min-height: 100%;
    background: ${primary};
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI Variable,Segoe UI,system-ui,ui-sans-serif,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: ${black};
  }
  input {
    color: ${white};
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
