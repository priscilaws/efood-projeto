import { createGlobalStyle } from "styled-components";

export const colors = {
  coral: "#E66767",
  begeDark: "#FFEBD9",
  bege: "#FFF8F2",
  white: "#ffffff",
};

export const GlobalCss = createGlobalStyle`
    * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Roboto", sans-serif;
}

body {
background-color:${colors.bege};
color:${colors.coral};
}
`;
