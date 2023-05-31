import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }  
`;
