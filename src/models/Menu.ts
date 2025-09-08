class Menu {
  id: number
  image: string
  title: string
  description: string
  portion?: string
  price?: number

  constructor(
    id: number,
    image: string,
    title: string,
    description: string,
    portion: string,
    price: number
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.portion = portion
    this.price = price
  }
}

export default Menu
