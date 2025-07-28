import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderContainer = styled.div`
  background-color: ${colors.white};
  color: ${colors.brick};
  margin: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 400;
    font-size: 18px;
  }

  img {
    height: 120px;
  }
`;
