import { createGlobalStyle } from "styled-components";

import * as React from "react";

export default function RootLayout() {
  return (
    <>
      <GlobalStyle />
      hi
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    background: red;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;
