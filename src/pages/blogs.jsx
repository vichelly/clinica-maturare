import React, { useEffect, useState } from 'react'
import Menu from 'components/Menu'
import Blogs from 'components/Blogs'
import client from 'graphql/client'
import { GET_BLOGS, GET_PAGE_BY_SLUG, GET_PAGES } from 'graphql/queries'

export default function Blog(blogs) {
  //alterar cor do menu ao scrollar

  const [escureceMenu, setEscureceMenu] = useState(false)

  useEffect(function () {
    function ScrollY() {
      if (window.scrollY > 10) {
        setEscureceMenu(true)
      } else {
        setEscureceMenu(false)
      }
    }
    window.addEventListener('scroll', ScrollY)
  }, [])

  return (
    <>
      <Menu action={escureceMenu} />
      <Blogs blogs ={blogs} />
    </>
  )
}

export async function getStaticProps() {
  const { blogs } = await client.request(GET_PAGES, { first: 50 })

  const slugs = blogs.map(({ slug }) => ({
    params: { slug }
  }))

  const headings = blogs.map(({ heading }) => ({
    params: { heading }
  }))

  return { props:{
    headings, 
    slugs
  } }
}
