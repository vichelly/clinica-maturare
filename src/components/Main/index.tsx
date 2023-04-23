/* eslint-disable prettier/prettier */
import * as S from './styles'

const Main = () => (
  <>
    <S.Wrapper>
      <S.Container>
        <S.Banner>
            <S.BannerLeft>
                <div>
                    <h1>CLINICA DE PSICANALISE</h1>
                </div>
                <div>
                    <h2>Erika Fujita</h2>
                </div>
                <div>
                    <h3>Atendimentos remoto ou presenciais</h3>
                </div>
            </S.BannerLeft>
            <S.BannerRight>
                <h4>Nos últimos meses estamos vivendo uma pandemia do vírus COVID-19, o mundo todo está trabalhando para que possamos sair da quarentena, e voltar ao convívio social, o mais breve possível.</h4>
                <br />
                <h4>
                Enquanto isto não acontece, é muito importante que estejamos atentos à nossa saúde mental, o estresse durante este período e o distanciamento social, podem causar uma série de problemas mentais e sociais.
                </h4>
                <br />
                <h4>
                <strong>Estamos aqui para ajudar, entre em contato!</strong>
                </h4>
            </S.BannerRight>
        </S.Banner>
      </S.Container>
    </S.Wrapper>
    {/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.543241485618!2d-46.53028868847073!3d-23.65652336500775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce428f07e26a2b%3A0x22071b7b9e35b017!2sR.%20Primeiro%20de%20Maio%2C%20188%20-%20Centro%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009015-030!5e0!3m2!1sen!2sbr!4v1681999193782!5m2!1sen!2sbr"
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe> */}
  </>
)

export default Main
