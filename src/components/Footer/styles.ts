import styled from 'styled-components'
import theme from '../../styles/theme'

export const FTest = styled.div`
  min-height: 316px;
  background-color: rgb(191, 204, 181, 1);
`

export const Footer = styled.div`
  min-height: 320px;
  display: flex;
  justify-content: center;
  padding: 37px 0px;

  @media (max-width: 1300px) {
    padding: 37px 20px;
  }

  @media (max-width: 649px) {
    padding-bottom: 100px;
  }
`

export const Container = styled.div`
  width: 1500px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    padding-bottom: 36px;
  }
`

export const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 48px;

  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    gap: 20px;
    div {
      display: flex;
      img {
        width: 60px;
      }
    }
  }
  @media (max-width: 350px) {
    div {
      img {
        margin-top: 10px;
        width: 45px;
      }
    }
  }
`

export const ParagraphLeft = styled.p`

  letter-spacing: 0.1rem;
`

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 650px) {
    align-items: center;
  }
`
export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
  }
`
export const Terms = styled.a`

  margin: 2px 0;
`

export const ParagraphRight = styled.p`

  margin-top: 20px;
`
export const Paragraph = styled.span`

`
export const PFooter = styled.p`

  cursor: pointer;
`
