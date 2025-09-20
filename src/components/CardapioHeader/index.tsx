import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../assets/logos/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const CardapioHeader = () => {
  const dispatch = useDispatch()
  const quantity = useSelector((state: RootReducer) => state.cart.items.length)

  return (
    <HeaderContainer>
      <HeaderContent>
        <h4>Restaurantes</h4>
        <img src={Logo} alt="efood" />
        <button type="button" onClick={() => dispatch(open())}>
          {quantity} produto(s) no carrinho
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default CardapioHeader
