import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  transition: transform 0.2s ease-in-out;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  color: ${colors.navy};
  margin-top: 8px;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${colors.black};
  margin-top: 4px;
  text-align: left;
`;

export const Divider = styled.div`
  height: 6px;

  background-color: ${colors.aqua};

  border-radius: 3px;
`;

export const BuyButton = styled.button`
  background-color: ${colors.brick};
  border: none;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  color: ${colors.white};
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  margin: 12px 0;
  transition: color 0.3s;

  &:hover {
    color: ${colors.brick};
    background-color: transparent;
  }
`;
