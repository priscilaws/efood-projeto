import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#FFFAF4",
  black: "#44403D",
  aqua: "#16C1C9",
  orange: "#FE960F",
  brick: "#e29354",
  navy: "#075F85",
  peach: "#FFE7C5",
};

export const GlobalCss = createGlobalStyle`
    * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Sora", sans-serif;
font-size: 24px;
}

body {
background-color:${colors.white};
color:${colors.black};
}
`;
