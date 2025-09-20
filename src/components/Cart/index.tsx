import Button from '../Button'

import foto from '../../assets/images/massa-1.png'

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
import { close, remove } from '../../store/reducers/cart'
import { formatarPreco } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <CartWrapper>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatarPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </CartWrapper>
        <Prices>
          <span>Valor Total </span>
          <span>{formatarPreco(getTotalPrice())}</span>
        </Prices>
        <ButtonCart>Continuar com a compra</ButtonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
