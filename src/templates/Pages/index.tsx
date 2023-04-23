import Link from 'next/link'
import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({heading, body}:PageTemplateProps) => (
  <S.Content>
    <Link href="/">
      <p>Close</p>
    </Link>
    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PageTemplate
