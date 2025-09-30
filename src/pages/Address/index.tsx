import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import { Overlay } from '../../components/Cart/styles'
import {
  ButtonCart,
  CartContainer,
  Sidebar,
} from '../../components/Cart/styles'
import { FormContainer, Row } from './styles'
import { formatPriceBRL } from '../../utils'

const DeliverySchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  street: Yup.string().required('Rua obrigatória'),
  city: Yup.string().required('Cidade obrigatória'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido (use 00000-000)')
    .required('CEP obrigatório'),
  number: Yup.string().required('Número obrigatório'),
  complement: Yup.string(),
})

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const getTotal = () => items.reduce((acc, item) => acc + (item.preco ?? 0), 0)

  return (
    <CartContainer className="is-open">
      <Overlay onClick={() => navigate('../')} />
      <Sidebar>
        <FormContainer>
          <h1>Dados de Entrega</h1>

          <Formik
            initialValues={{
              name: '',
              street: '',
              city: '',
              cep: '',
              number: '',
              complement: '',
            }}
            validationSchema={DeliverySchema}
            onSubmit={(values) => {
              navigate('../pagamento', {
                state: { deliveryAddress: values, items, total: getTotal() },
              })
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label>
                  Nome de quem vai receber
                  <Field name="name" />
                  <ErrorMessage name="name" component="div" />
                </label>

                <label>
                  Endereço (Rua)
                  <Field name="street" />
                  <ErrorMessage name="street" component="div" />
                </label>

                <label>
                  Cidade
                  <Field name="city" />
                  <ErrorMessage name="city" component="div" />
                </label>

                <Row>
                  <label>
                    CEP
                    <Field name="cep" placeholder="00000-000" />
                    <ErrorMessage name="cep" component="div" />
                  </label>

                  <label>
                    Número
                    <Field name="number" />
                    <ErrorMessage name="number" component="div" />
                  </label>
                </Row>

                <label>
                  Complemento
                  <Field name="complement" />
                </label>

                <h2>Resumo do Pedido</h2>
                {items.map((item) => (
                  <p key={item.id}>
                    {item.nome} - {formatPriceBRL(item.preco)}
                  </p>
                ))}
                <strong>Total: {formatPriceBRL(getTotal())}</strong>

                <ButtonCart type="submit" disabled={isSubmitting}>
                  Continuar com o pagamento
                </ButtonCart>
                <ButtonCart
                  type="button"
                  onClick={() => navigate('../carrinho')}
                  disabled={isSubmitting}
                >
                  Voltar para o carrinho
                </ButtonCart>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Checkout
