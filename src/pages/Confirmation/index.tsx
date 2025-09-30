import { useLocation, useNavigate } from 'react-router-dom'
import {
  CartContainer,
  Sidebar,
  Overlay,
  ButtonCart,
} from '../../components/Cart/styles'
import { ConfirmWrapper, FormContainer } from '../Address/styles'

const Confirmation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const orderId = location.state?.orderId

  return (
    <CartContainer className="is-open">
      <Overlay onClick={() => navigate('../')} />
      <Sidebar>
        <FormContainer>
          <ConfirmWrapper>
            <h1>Pedido realizado - {orderId}</h1>

            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>

            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>

            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>

            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </ConfirmWrapper>

          <ButtonCart onClick={() => navigate('/')}>Concluir</ButtonCart>
        </FormContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Confirmation
