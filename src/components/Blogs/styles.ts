import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 1000px;
  margin-top: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 1000px;
  background-color: #FFF4D2;
  padding: 20px;
  justify-content: center;
  align-items: center;
  h2{
    cursor: pointer;
    transition: all .2s;
    width: fit-content;
    border-bottom: 2px solid;
    padding-top: 10px;
  }
  h2:first-child{
    padding-top: 0px;
  }
  h2:hover{
    color: #7C96AB;
  }
`

export const Banner = styled.div`
  /* height: 80vh; */
  display: flex;
  justify-content: center;
  overflow: auto;
  @media (min-width: 1500px) {
    width: 100vw;
  }
`

export const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  @media (min-width: 1500px) {
    width: 100vw;
  }
`

export const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  @media (min-width: 1500px) {
    width: 100vw;
  }
`
