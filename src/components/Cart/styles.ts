import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

import bin from '../../assets/icons/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const CartWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Sidebar = styled.aside`
  background-color: ${colors.coral};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`
export const ButtonCart = styled.button`
  background-color: ${colors.begeDark};
  color: ${colors.coral};
  max-width: 100%;
  width: 100%;
  padding: 4px;
  border: none;
  font-weight: 700;
  cursor: pointer;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.begeDark};
  margin-bottom: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.bege};
  padding: 8px;
  position: relative;
  background-color: ${colors.begeDark};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.coral};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${colors.coral};
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  > div {
    flex-grow: 1;
  }

  button {
    background-image: url(${bin});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    align-self: end;
    cursor: pointer;
  }
`
