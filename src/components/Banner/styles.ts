// src/components/Banner/styles.ts
import styled from 'styled-components'

export const BannerContainer = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 32px;
  color: white;
  font-weight: bold;
  overflow: hidden;
  margin-bottom: 52px;
`

export const Category = styled.span`
  position: absolute;
  top: 16px;
  left: 32px;
  font-weight: 200;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1;
  margin-left: 170px;
`

export const Title = styled.h2`
  font-size: 32px;
  z-index: 1;
  position: relative;
  margin-left: 170px;
`
