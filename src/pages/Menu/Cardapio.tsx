import { MenuCard } from '../../components/CardapioCard'
import CardapioHeader from '../../components/CardapioHeader'
import { Wrapper } from '../../components/CardapioCard/styles'
import { Banner } from '../../components/Banner'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Restaurante from '../../models/Restaurant'

const Cardapio = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  console.log({ restaurante })

  useEffect(() => {
    if (id) {
      fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((restaurant) => setRestaurante(restaurant))
    }
  }, [id])

  if (restaurante === null) {
    return null
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
              console.log('Adicionado ao carrinho!')
            }}
          />
        ))}
      </Wrapper>
    </>
  )
}

export default Cardapio
