import RestaurantCard from '../../components/Card'
import { CardList, CardListWrapper } from '../../components/Card/styles'
import Restaurant from '../../models/Restaurant'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <CardListWrapper>
      <CardList>
        {restaurants.map((restaurant, i) => (
          <RestaurantCard
            key={i}
            image={restaurant.image}
            title={restaurant.title}
            rating={restaurant.rating}
            description={restaurant.description}
            tags={restaurant.tags}
          />
        ))}
      </CardList>
    </CardListWrapper>
  )
}

export default RestaurantList
