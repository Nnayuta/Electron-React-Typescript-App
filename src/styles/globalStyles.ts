import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  #root{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  
    *{
      transition: all 0.5s;
    }
  }

  /* Define a largura e a cor da barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }
  
  /* Define o sombreamento da barra de rolagem quando estiver ativa */
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), inset 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  
  /* Define a animação suave ao rolar */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), inset 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  /* Define a cor do fundo da área de rolagem */
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.common.text2};
    text-transform: uppercase;
    user-select: none;
  }

`;
