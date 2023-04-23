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
  overflow: auto;
  @media (max-width: 1000px) {
    width: 100vw;
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
