import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 5vh;
  max-width: 1000px;
  margin: auto;
`

export const Heading = styled.h1`
  font-size: 31px;
  margin-bottom: 20px;
`

export const Body = styled.div`
  background-color: rgb(252,233,219) ;
  border-radius: 20px;
  padding: 30px;
`

export const Wrapper = styled.div`
  padding-top: 10vh;
  width: 100%;
  background-color: aliceblue;
`

export const Voltar = styled.div`
  cursor: pointer;
  background-color: #FF9B9B;
  width: fit-content;
  padding: 4px;
  border-radius: 10px;
  margin-top: 20px;
  & h1{
    color: white;
  }
`
