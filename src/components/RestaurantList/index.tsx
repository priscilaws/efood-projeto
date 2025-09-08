import RestaurantCard from '../../components/Card'
import { CardList, CardListWrapper } from '../../components/Card/styles'
import Restaurante from '../../models/Restaurant'

type Props = {
  restaurants: Restaurante[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <CardListWrapper>
      <CardList>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurante={restaurant} />
        ))}
      </CardList>
    </CardListWrapper>
  )
}

export default RestaurantList
