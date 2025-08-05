import { BannerContainer, Category, Title, BannerContent } from './styles'

type BannerProps = {
  backgroundImage: string
  category: string
  title: string
}

export const Banner = ({ backgroundImage, category, title }: BannerProps) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <BannerContent>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </BannerContent>
    </BannerContainer>
  )
}
