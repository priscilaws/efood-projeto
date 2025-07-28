import styled from "styled-components";
import { colors } from "../../styles";

export const BannerContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 380px;
  display: block;
  object-fit: cover;
`;

export const BannerTitle = styled.h2`
  position: absolute;
  top: 24px;
  left: 24px;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.navy};
`;

export const TagWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;
