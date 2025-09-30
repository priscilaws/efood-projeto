import { MenuCard } from '../../components/CardapioCard'
import CardapioHeader from '../../components/CardapioHeader'
import { Wrapper } from '../../components/CardapioCard/styles'
import { Banner } from '../../components/Banner'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

const Cardapio = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantByIdQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <CardapioHeader />
      <Banner
        backgroundImage={restaurante.capa}
        category={restaurante.tipo}
        title={restaurante.titulo}
      />
      <Wrapper>
        {restaurante.cardapio.map((itemCardapio) => (
          <MenuCard
            key={itemCardapio.id}
            cardapio={itemCardapio}
            onAddToCart={() => {
              dispatch(add(itemCardapio))
              navigate('carrinho')
            }}
          />
        ))}
      </Wrapper>

      <Outlet />
    </>
  )
}

export default Cardapio
