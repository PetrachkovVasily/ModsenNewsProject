import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
  }
`