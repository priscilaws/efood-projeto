import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  CartWrapper,
  ButtonCart,
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { formatPriceBRL } from '../../utils'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    navigate('../')
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('../endereco')
  }

  return (
    <CartContainer className="is-open">
      <Overlay onClick={closeCart} />
      <Sidebar>
        <CartWrapper>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPriceBRL(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </CartWrapper>
        <Prices>
          <span>Valor Total </span>
          <span>{formatPriceBRL(getTotalPrice())}</span>
        </Prices>
        <ButtonCart onClick={goToCheckout}>Continuar com a compra</ButtonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
