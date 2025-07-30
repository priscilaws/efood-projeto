import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
  width: 472px;
`;

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
  border: 1px solid ${colors.coral};
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const CardList = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 80px 48px;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 120px;
`;

export const Info = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  color: ${colors.coral};
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

export const Description = styled.p`
  color: ${colors.coral};
  font-size: 14px;
  margin: 8px 0 16px;
  line-height: 1.4;
`;

export const Rating = styled.span`
  color: ${colors.coral};
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Star = styled.img`
  width: 16px;
  height: 16px;
`;
