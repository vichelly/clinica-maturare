import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  padding-bottom: 10vh;
  padding-top: 5vh;
  justify-content: center;
  background-image: url('img/papel-de-parede-tropical-tons-pasteis-1m-x-2-70m-286883.jpg');
  @media (max-width: 560px) {
    background-image: none ;
    padding: none;
    background-color: #F7F5EB;
  }
`

export const Container = styled.div`
  width: 1500px;
  margin-top: 15vh;
  display: flex;
  justify-content: center;
  overflow-inline: auto;
  @media (max-width: 1500px) {
    width: 100vw;
  }
`

export const Banner = styled.div`
  /* height: 80vh; */
  display: flex;
  justify-content: center;
  overflow: auto;
  background-color: rgb(237, 198, 177);
  padding: 20px;
  border-radius: 10px;
  @media (min-width: 1500px) {
    width: 100vw;
  }
  @media (max-width: 560px) {
    margin-top: -10vh;
  }
`

export const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  @media (min-width: 1500px) {
    
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