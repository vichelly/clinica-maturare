/* eslint-disable prettier/prettier */
import Link from 'next/link'
import * as S from './styles'

const Blogs = ({blogs}) => {
  console.log(blogs)
  /* console.log(blogs.slugs)

  console.log(blogs.headings) */


  const headings = blogs.headings.map(function(item) {
    return item.params.heading;
  });
  
  /* console.log(headings); */

  /* headings.map((item)=>{
    console.log(item);
  }) */


  const slugs = blogs.slugs.map(function(item) {
    return item.params.slug;
  });
  
/*   console.log(slugs); */

  return(
    <>
      <S.Wrapper>
        <S.Container>
        <h1>Assuntos do Blog</h1>
        <S.Content>
          {blogs.headings.map((item, index) => (
          <Link href={'blogs/'+(blogs.slugs[index].params.slug)}>
            <h2>{item.params.heading}</h2>
          </Link>
        ))}
        </S.Content>
        </S.Container>
      </S.Wrapper>
    </>
  )
  }

export default Blogs
