import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${colors.begeDark};
  color: ${colors.coral};
  width: 100%;
  padding: 16px 0;
`

export const HeaderContent = styled.div`
  margin: 0 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 64px;

  h4 {
    font-weight: 700;
    font-size: 18px;
  }

  img {
    width: 125px;
  }
`
