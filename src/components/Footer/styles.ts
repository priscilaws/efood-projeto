// src/components/Footer/styles.ts
import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
  background-color: ${colors.begeDark};
  padding: 40px 0;
  text-align: center;
`;

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${colors.coral};
  max-width: 50%;
  margin: 0 auto;
  line-height: 1.4;
`;
