import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderBar = styled.header`
  background-color: ${colors.begeDark};
  color: ${colors.coral};
  height: 360px;
  margin-top: 24px;
  display: grid;
  place-items: center;

  p {
    font-size: 36px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    width: 50%;
    text-align: center;
  }
`;

export const LogoIcon = styled.img`
  height: 60px;
`;
