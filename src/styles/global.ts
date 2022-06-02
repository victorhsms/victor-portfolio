import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 85.71%;
    }

    @media (max-width: 480px) {
      font-size: 75%;
    }
  }

  body {
    background-color: #010C15;
  }
`
