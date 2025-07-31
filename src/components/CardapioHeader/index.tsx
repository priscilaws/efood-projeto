import Logo from '../../assets/logos/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

const CardapioHeader = () => (
  <HeaderContainer>
    <HeaderContent>
      <h4>Restaurantes</h4>
      <img src={Logo} alt="efood" />
      <h4>0 produto(s) no carrinho</h4>
    </HeaderContent>
  </HeaderContainer>
)

export default CardapioHeader
