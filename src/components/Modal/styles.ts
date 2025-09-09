// src/components/Modal/styles.ts
import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background: ${colors.coral};
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 16px;
  padding: 24px;
  border-radius: 4px;
  max-width: 700px;
  position: relative;
  color: ${colors.bege};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: ${colors.bege};
  font-size: 24px;
  cursor: pointer;
`

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 12px;
`

export const Portion = styled.span`
  font-size: 14px;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  background: ${colors.begeDark};
  color: ${colors.coral};
  font-size: 14px;
  border: none;
  padding: 4px 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${colors.bege};
  }
`
