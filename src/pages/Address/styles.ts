import styled from 'styled-components'
import { colors } from '../../styles'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.coral};
  width: 100%;
  color: ${colors.begeDark};
  color: ${colors.begeDark} h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    label {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      font-weight: 500;
      color: ${colors.begeDark};
    }

    input {
      margin-top: 4px;
      padding: 4px;
      border: 1px solid ${colors.begeDark};
      font-size: 14px;
      background-color: ${colors.begeDark};
      color: #333;
    }

    div {
      font-size: 12px;
      color: ${colors.white};
      margin-top: 2px;
    }

    h2 {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: ${colors.begeDark};
    }

    p {
      font-size: 14px;
      margin: 4px 0;
      color: ${colors.begeDark};
    }

    strong {
      display: block;
      margin-top: 12px;
      font-size: 16px;
      color: ${colors.begeDark};
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 34px;
  width: 100%;

  > label {
    flex-grow: 1;
  }
`

export const ConfirmWrapper = styled.div`
  margin-bottom: 24px;
  h1 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
  }

  p:last-child {
    margin-bottom: 0;
  }
`
