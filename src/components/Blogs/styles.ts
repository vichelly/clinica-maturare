import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  background-color: aliceblue;
`

export const Container = styled.div`
  width: 1000px;
  margin-top: 20vh;
  display: flex;
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
  flex-direction: row;
  width: 1000px;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  h2{
    cursor: pointer;
    transition: all .2s;
    width: fit-content;
    padding-top: 10px;
  }
  h2:first-child{
    padding-top: 0px;
  }
  h2:hover{
    color: #7C96AB;
  }
`

export const Card = styled.div`
  cursor: pointer;
  margin: 30px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 150px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: rgb(224,168,153);
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
