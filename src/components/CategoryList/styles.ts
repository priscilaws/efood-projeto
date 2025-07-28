import styled from "styled-components";

export const Container = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
  margin-left: 24px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const List = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  justify-content: center;
`;
