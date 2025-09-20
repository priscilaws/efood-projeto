import { MenuCard } from '../../components/CardapioCard'
import CardapioHeader from '../../components/CardapioHeader'
import { Wrapper } from '../../components/CardapioCard/styles'
import { Banner } from '../../components/Banner'
import { useParams } from 'react-router-dom'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

const Cardapio = () => {
  const dispatch = useDispatch()
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
              dispatch(open())
            }}
          />
        ))}
      </Wrapper>
    </>
  )
}

export default Cardapio
