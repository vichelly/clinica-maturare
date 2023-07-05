import * as S from './styles'
import Link from 'next/link'

const BotaoWpp = () => (
  <>
    <S.wppMobile
      style={{ textDecoration: 'none' }}
      href="https://api.whatsapp.com/send?phone=5511998192889&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20"
      target="_blank"
      rel="noreferrer"
    >
      <img src="/img/icon/iconSmallWhatsapp.png" alt="" />
    </S.wppMobile>
  </>
)

export default BotaoWpp
