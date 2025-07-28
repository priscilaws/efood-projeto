import styled from "styled-components";
import { colors } from "../../styles";

import { Props } from ".";

export const TagContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.color === "orange" ? colors.orange : colors.aqua};
  color: ${colors.white};
  font-size: ${(props) => (props.size === "big" ? "16px" : "12px")};
  font-weight: bold;
  padding: ${(props) => (props.size === "big" ? "8px 16px" : "4px 6px")};
  border-radius: 8px;
  display: inline-block;
`;
