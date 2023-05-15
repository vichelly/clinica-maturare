import * as S from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const Sidebar = ({ active, sidebar }) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <>
      <S.Geral
        onClick={closeSidebar}
        passDisplay={sidebar ? 'block' : 'none'}
      ></S.Geral>
      <S.MenuMobile passSidebar={sidebar ? 1 : 0}>
        <div className='content' >
          <div className='logo'>
            <h2>Clínica</h2>
            <h1>Maturare</h1>
          </div>
            <div>
              <Link href="/">
                <div className='itens'>
                  <Icon icon="material-symbols:home-outline-rounded" width="24" color="white" /> 
                  <p>Inicio</p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/blogs">
                <div className="itens">
                  <Icon icon="mdi:post-outline" width="24" color="white" />
                  <p>Blog</p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/duvidas-frequentes">
                <div className="itens">
                  <Icon icon="mdi:frequently-asked-questions" color="white" width="24" />
                  <p>FAQ</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="infos">
            <div>
              <Link href="/sobre">
                <div className="itens">
                  <Icon icon="mdi:about-circle-outline" width="24" color="white" />
                  <p>Sobre</p>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/contato">
                <div className="itens">
                  <Icon icon="mdi:phone" width="24" color="white" />
                  <p>Contato</p>
                </div>
              </Link>
            </div>
          </div>
      </S.MenuMobile>
    </>
  )
}

const Menu = ({ action }) => {
  const [sidebar, setSideBar] = useState(false)
  const showSiderbar = () => setSideBar(!sidebar)
  const router = useRouter()
  return (
    <>
      <S.Wrapper
        passToStyle={
          action ? 'rgb(191, 204, 181, 0.7)' : 'rgb(191, 204, 181, 1)'
        }
      >
        <S.Container>
          <S.MenuDesktop>
            <div className="Logo">
              <h1>Clinica Maturare</h1>
            </div>

            <div className="Content">
              <div>
                <Link href="/">
                  <p className={router.pathname == '/' ? 'active' : ''}>
                    Inicio
                  </p>
                </Link>
              </div>
              <div>
                <Link href="/contato">
                  <p className={router.pathname == '/contato' ? 'active' : ''}>
                    Contato
                  </p>
                </Link>
              </div>
              <div>
                <Link href="/blogs">
                  <p className={router.pathname == '/blogs' ? 'active' : ''}>
                    Blog
                  </p>
                </Link>
              </div>
              <div>
                <Link href="/sobre">
                  <p className={router.pathname == '/sobre' ? 'active' : ''}>
                    Sobre
                  </p>
                </Link>
              </div>
              <div>
                <Link href="/faq">
                  <p className={router.pathname == '/faq' ? 'active' : ''}>
                    FAQ
                  </p>
                </Link>
              </div>
            </div>
          </S.MenuDesktop>
        </S.Container>
      </S.Wrapper>
      <S.HeaderMobile>
        <S.Hamburguer onClick={showSiderbar}>
          <div></div>
          <div></div>
          <div></div>
        </S.Hamburguer>
        {<Sidebar sidebar={sidebar} active={setSideBar} />}
      </S.HeaderMobile>
    </>
  )
}
export default Menu
