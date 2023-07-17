import { createGlobalStyle } from "styled-components";

import InstrumentSans from "assets/fonts/InstrumentSans-VariableFont_wdthwght.ttf";
import InstrumentSansItalic from "assets/fonts/InstrumentSans-Italic-VariableFont_wdthwght.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Instrument Sans";
    src: url(${InstrumentSans}) format("truetype");
  }

  @font-face {
    font-family: "Instrument Sans";
    src: url(${InstrumentSansItalic}) format("truetype");
    font-style: italic;
  }

  :root {
    --background-color: #fafafa;
    --body-text-color: #737373;
    --heading-text-color: #333;
    --accent-color: #633cff;
    --accent-hover-color: #beadff;
    --accent-light-color: #efebff; //secondary active button color, place holder color
    --light-text-color: #ffffff;
    --input-border-color: #d9d9d9;
    --alert-color: #ff3939;

    --box-shadow-primary: 0px 0px 32px 0px rgba(99 60 255 / 25%);
  }

  * {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    user-select: none;
  }


  html {
    height: 100vh;
  }

  body {
    font-family: 'Instrument Sans', sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
