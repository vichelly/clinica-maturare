import styled from 'styled-components'
import theme from '../../styles/theme'

export const wppImg = styled.img`
  height: 47px;
  margin-bottom: 9px;
`

export const wppMobile = styled.a`
display: block;
    height: 57px;
    right: 2vw;
    bottom: 85px;
    position: fixed;
    z-index: 8;
  @media (max-width: 650px) {
    display: block;
    height: 57px;
    right: 2vw;
    bottom: 85px;
    position: fixed;
    z-index: 8;
  }
`