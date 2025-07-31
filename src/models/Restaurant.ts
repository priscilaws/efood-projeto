class Restaurant {
  id: number
  image: string
  rating: number
  title: string
  description: string
  tags: string[]

  constructor(
    id: number,
    image: string,
    rating: number,
    title: string,
    description: string,
    tags: string[]
  ) {
    this.id = id
    this.image = image
    this.rating = rating
    this.title = title
    this.description = description
    this.tags = tags
  }
}

export default Restaurant
