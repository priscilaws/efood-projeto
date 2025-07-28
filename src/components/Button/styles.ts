import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles";

export const ButtonContainer = styled.button`
  border: ${(props) => (props.color === "navy" ? colors.navy : colors.brick)};
  border-radius: 8px;
  background-color: ${(props) =>
    props.color === "navy" ? colors.navy : colors.brick};
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  background-color: ${(props) =>
    props.color === "navy" ? colors.navy : colors.brick};
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  text-decoration: none;
`;
