import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  ButtonCart,
  CartContainer,
  Overlay,
  Sidebar,
} from '../../components/Cart/styles'
import { FormContainer, Row } from '../Address/styles'
import { useCheckoutMutation } from '../../services/api'
import { clear } from '../../store/reducers/cart'

const PaymentSchema = Yup.object().shape({
  cardName: Yup.string().required('Nome obrigatório'),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'Número inválido (16 dígitos)')
    .required('Número obrigatório'),
  cvv: Yup.string()
    .matches(/^\d{3}$/, 'CVV inválido (3 dígitos)')
    .required('CVV obrigatório'),
  expiryMonth: Yup.string()
    .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
    .required('Obrigatório'),
  expiryYear: Yup.string()
    .matches(/^\d{4}$/, 'Ano inválido (ex: 2028)')
    .required('Obrigatório'),
})

const Payment = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [checkout, { data, isSuccess }] = useCheckoutMutation()
  const total = location.state?.total ?? 0
  const deliveryAddress = location.state?.deliveryAddress

  if (isSuccess) {
    dispatch(clear())
    navigate('../confirmacao', { state: data })
    return null
  }

  return (
    <CartContainer className="is-open">
      <Overlay onClick={() => navigate('../')} />
      <Sidebar>
        <FormContainer>
          <h1>Pagamento - Valor a pagar R$ {total.toFixed(2)}</h1>

          <Formik
            initialValues={{
              cardName: '',
              cardNumber: '',
              cvv: '',
              expiryMonth: '',
              expiryYear: '',
            }}
            validationSchema={PaymentSchema}
            onSubmit={(values) => {
              checkout({
                products: items.map((item) => {
                  return {
                    id: item.id,
                    price: item.preco,
                  }
                }),
                delivery: {
                  receiver: deliveryAddress.name,
                  address: {
                    city: deliveryAddress.city,
                    description: deliveryAddress.street,
                    complement: deliveryAddress.complement,
                    number: deliveryAddress.number,
                    zipCode: deliveryAddress.cep,
                  },
                },
                payment: {
                  card: {
                    name: values.cardName,
                    number: values.cardNumber,
                    code: Number(values.cvv),
                    expires: {
                      month: Number(values.expiryMonth),
                      year: Number(values.expiryYear),
                    },
                  },
                },
              })
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <label>
                  Nome no cartão
                  <Field name="cardName" />
                  <ErrorMessage name="cardName" component="div" />
                </label>

                <Row>
                  <label>
                    Número do cartão
                    <Field
                      name="cardNumber"
                      placeholder="0000 0000 0000 0000"
                    />
                    <ErrorMessage name="cardNumber" component="div" />
                  </label>

                  <label>
                    CVV
                    <Field name="cvv" placeholder="000" />
                    <ErrorMessage name="cvv" component="div" />
                  </label>
                </Row>

                <Row>
                  <label>
                    Mês de vencimento
                    <Field name="expiryMonth" placeholder="MM" />
                    <ErrorMessage name="expiryMonth" component="div" />
                  </label>

                  <label>
                    Ano de vencimento
                    <Field name="expiryYear" placeholder="YYYY" />
                    <ErrorMessage name="expiryYear" component="div" />
                  </label>
                </Row>

                <ButtonCart type="submit" disabled={isSubmitting}>
                  Finalizar pagamento
                </ButtonCart>

                <ButtonCart
                  type="button"
                  onClick={() => navigate('../endereco')}
                  disabled={isSubmitting}
                >
                  Voltar para a edição de endereço
                </ButtonCart>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Payment
