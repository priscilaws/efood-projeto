import { BannerContainer, Category, Title } from './styles'

type BannerProps = {
  backgroundImage: string
  category: string
  title: string
}

export const Banner = ({ backgroundImage, category, title }: BannerProps) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Category>{category}</Category>
      <Title>{title}</Title>
    </BannerContainer>
  )
}
