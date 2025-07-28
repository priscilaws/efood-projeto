import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderBar = styled.header`
  background-color: ${colors.aqua};
  color: ${colors.white};
  height: 360px;
  margin-top: 24px;
  display: grid;
  place-items: center;

  img {
    height: 150px;
  }
  p {
    font-size: 16px;
    margin-left: 16px;
  }
`;

export const LogoIcon = styled.img`
  height: 48px;
  margin-left: 16px;
  animation: wag 1s infinite alternate ease-in-out;

  @keyframes wag {
    0% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(5deg);
    }
  }
`;
