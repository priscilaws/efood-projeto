import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.footer`
  background-color: ${colors.white};
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 80px;
  }

  h4 {
    font-size: 12px;
    color: ${colors.navy};
    padding-top: 12px;
  }
`;

export const Icon = styled.img`
  && {
    height: 48px;
    width: auto;
    margin-left: 12px;
  }
`;
