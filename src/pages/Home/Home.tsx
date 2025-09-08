import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import Restaurante from '../../models/Restaurant'

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((restaurantes) => setRestaurants(restaurantes))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}
