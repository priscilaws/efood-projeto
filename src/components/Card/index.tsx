import {
  Card,
  Image,
  TagsContainer,
  Title,
  Description,
  Rating,
  Star,
  Info,
  CardContainer,
  InfoHeader,
} from './styles'

import estrela from '../../assets/icons/estrela.svg'
import Tag from '../Tag'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import Restaurante from '../../models/Restaurant'

type Props = {
  restaurante: Restaurante
}

const RestaurantCard = ({ restaurante }: Props) => {
  const navigate = useNavigate()

  return (
    <Card>
      <CardContainer>
        <Image src={restaurante.capa} alt={restaurante.titulo} />
        <TagsContainer>
          <Tag>{restaurante.tipo}</Tag>
        </TagsContainer>
      </CardContainer>

      <Info>
        <InfoHeader>
          <Title>{restaurante.titulo}</Title>
          <Rating>
            {restaurante.avaliacao.toFixed(1)}
            <Star src={estrela} alt="estrela" />
          </Rating>
        </InfoHeader>

        <Description>{restaurante.descricao}</Description>
        <Button
          onClick={() => navigate(`/restaurante/${restaurante.id}/cardapio`)}
        >
          Saiba mais
        </Button>
      </Info>
    </Card>
  )
}

export default RestaurantCard
