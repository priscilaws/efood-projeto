import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  position: relative;
  background-color: ${colors.white};
  border: 2px solid ${colors.brick};
  margin-top: 48px;
  width: 480px;
  padding: 8px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
`;

export const Caption = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const Infos = styled.div`
  display: flex;
  gap: 4px;
  position: absolute;
  top: 16px;
  right: 16px;
`;
