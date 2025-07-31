import {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardButton,
} from './styles'

type CardProps = {
  image: string
  title: string
  description: string
  onAddToCart: () => void
}

export const MenuCard = ({
  image,
  title,
  description,
  onAddToCart,
}: CardProps) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={onAddToCart}>Adicionar ao carrinho</CardButton>
    </CardContainer>
  )
}
