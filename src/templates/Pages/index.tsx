import Link from 'next/link'
import * as S from './styles'
import Menu from 'components/Menu'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({heading, body}:PageTemplateProps) => (
  <>
    <S.Wrapper>
      <S.Content>
        <S.Heading>{heading}</S.Heading>
        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </S.Body>
        <Link href="/blogs">
          <S.Voltar>
            <h1>voltar para a página anterior</h1>
          </S.Voltar>
        </Link>
    </S.Content>
    </S.Wrapper>
  </>
)

export default PageTemplate
