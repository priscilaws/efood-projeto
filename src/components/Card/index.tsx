import React from 'react'
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

type Props = {
  image: string
  title: string
  description: string
  rating: number
  tags: string[]
}

const RestaurantCard = ({ image, title, description, rating, tags }: Props) => {
  return (
    <Card>
      <CardContainer>
        <Image src={image} alt={title} />
        <TagsContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </CardContainer>

      <Info>
        <InfoHeader>
          <Title>{title}</Title>
          <Rating>
            {rating.toFixed(1)}
            <Star src={estrela} alt="estrela" />
          </Rating>
        </InfoHeader>

        <Description>{description}</Description>
        <Button>Saiba mais</Button>
      </Info>
    </Card>
  )
}

export default RestaurantCard
