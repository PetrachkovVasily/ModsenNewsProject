import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      display: none;
    }

    #root {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    a {
      text-decoration: none;
      color: #2C3144;
    }
  }
`