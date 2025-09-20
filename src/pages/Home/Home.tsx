import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

export default function Home() {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}
