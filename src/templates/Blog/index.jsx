import React, { useEffect, useState } from 'react'
import Menu from 'components/Menu'
import Blogs from 'components/Blogs'


export default function BlogsTemplate(blogs) {
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
      <Blogs blogs={blogs} />
    </>
  )
}
