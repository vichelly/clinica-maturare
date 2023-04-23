import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  position: fixed;
  /* background-color: rgb(148, 175, 159); */
  transition: all 0.5s;
  background-color: ${(props) => props.passToStyle};
  @media (max-width: 560px) {
    display: none;
  }
`

export const Container = styled.div`
  width: 1500px;
  height: 100px;
  display: flex;
  justify-content: center;
  @media (min-width: 1500px) {
    width: 100vw;
  }
  @media (max-width: 560px) {
    display: none;
  }
`
export const MenuDesktop = styled.div`
  width: 1500px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .Logo {
    color: white;
  }
  .Content {
    display: flex;
    flex-direction: row;
    gap: 30px;
    & div {
      display: inline;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      color: white;
      font-size: 15px;
      text-transform: uppercase;
      height: 25px;
      .active {
        border-bottom: 2px solid #fecd70;
      }
      p {
        transition: all 0.2s;
        border-bottom: 2px solid white;
        :hover {
          border-bottom: 2px solid #fecd70;
        }
      }
    }
  }
  @media (max-width: 1500px) {
    width: 100vw;
  }
  @media (max-width: 560px) {
    display: none;
  }
`

export const Geral = styled.div`
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  width: 1000vw;
  height: 1000vh;
  position: fixed;
  top: 0px;
  right: 0px;
  animation: darkSide 0.6s;
  display: ${(props) => props.passDisplay};
  @keyframes darkSide {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const MenuMobile = styled.div`
  padding: 52px 32px 92px 32px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  top: 0px;
  position: fixed;
  background: rgb(191, 204, 181);
  transition: 0.6s;
  z-index: 9;
  overflow: hidden;

  .logo{
    display: flex;
    flex-direction: column;
    color: white;
    margin-bottom: 40px;
  }

  .home{
  }
  .content{
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .infos{
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .itens{
    display: flex;
    flex-direction: row;
    gap: 32px;
    p{
      margin-top: 2px;
    }
  }

  div {
    display: flex;
    justify-content: left;
    width: 100%;
  }

  p {
    cursor: pointer;
    line-height: 20px;
    text-decoration: none;
    color: white;
    font-size: 20px;
  }

  li {
    display: inline;
  }
  @media (max-width: 650px) {
    width: 60vw;
    height: 100vh;
    left: calc(-60vw * ${(props) => 1 - (props.passSidebar)});
    gap: 18px;
    span {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      padding-left: 0px;
    }
  }
`
export const Hamburguer = styled.div`
  cursor: pointer;
  border: 3px solid rgb(191, 204, 181);
  border-radius: 230px;
  padding: 4px;
  div {
    background-color: rgb(191, 204, 181);
    height: 3px;
    width: 20px;
    margin: 5px;
  }
`
/* export const closeSidebar = styled.section`
  display: ${(props) => props.passDisplay};
  position: fixed;
  padding-left: 30px;
  cursor: pointer;
  right: 350px;
  top: 20px;
  z-index: 9;
  @media (max-width: 390px) {
    right: 245px;
  }
` */

export const HeaderMobile = styled.header`
  z-index: 10;
  display: none;
  @media (max-width: 560px) {
    display: flex;
    position: fixed;
    left: 16px;
    top: 24px;
  }
`
