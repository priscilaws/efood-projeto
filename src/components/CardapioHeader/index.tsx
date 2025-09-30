import { useSelector } from 'react-redux'
import Logo from '../../assets/logos/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'

const CardapioHeader = () => {
  const navigate = useNavigate()
  const quantity = useSelector((state: RootReducer) => state.cart.items.length)

  return (
    <HeaderContainer>
      <HeaderContent>
        <h4>Restaurantes</h4>
        <img src={Logo} alt="efood" />
        <button type="button" onClick={() => navigate('carrinho')}>
          {quantity} produto(s) no carrinho
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default CardapioHeader
