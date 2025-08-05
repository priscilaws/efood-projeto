import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
  width: 472px;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const CardContainer = styled.div`
  position: relative;
  line-height: 0;
`

export const CardList = styled.div`
  max-width: 1024px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px 48px;
  margin: 80px auto 120px auto;
  justify-items: center;
`

export const Info = styled.div`
  padding: 16px;
  border: 1px solid ${colors.coral};
  border-top: 0;
`

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  color: ${colors.coral};
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  color: ${colors.coral};
  font-size: 14px;
  margin: 8px 0 16px;
  line-height: 1.4;
`

export const Rating = styled.span`
  color: ${colors.coral};
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Star = styled.img`
  width: 16px;
  height: 16px;
`
export const CardListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
