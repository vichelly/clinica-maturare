/* eslint-disable prettier/prettier */
import Link from 'next/link'
import * as S from './styles'
import Footer from 'components/Footer'

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
            <S.Card>
              <h2>{item.params.heading}</h2>
            </S.Card>
          </Link>
        ))}
        </S.Content>
        </S.Container>
      </S.Wrapper>
      <Footer />
    </>
  )
  }

export default Blogs
