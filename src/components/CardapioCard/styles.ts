// src/components/Card/styles.ts
import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${colors.coral};
  color: ${colors.bege};
  padding: 8px;
  width: 320px;
  height: 340px;
  text-align: left;
`

export const CardImage = styled.img`
  max-width: 100%;
  margin-bottom: 8px;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  margin: 8px 0;
`

export const CardDescription = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
`

export const CardButton = styled.button`
  background-color: ${colors.begeDark};
  color: ${colors.coral};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  width: 100%;

  &:hover {
    background-color: ${colors.bege};
  }
`

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  justify-content: center;
  margin: 0 170px 120px 170px;
`
