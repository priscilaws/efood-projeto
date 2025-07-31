import { MenuCard } from '../../components/CardapioCard'
import CardapioHeader from '../../components/CardapioHeader'
import ImgPizza from '../../assets/images/massa-2.png'
import ImgPasta from '../../assets/images/bannerimg.png'
import { Wrapper } from '../../components/CardapioCard/styles'
import { Banner } from '../../components/Banner'

const Cardapio = () => {
  return (
    <>
      <CardapioHeader />
      <Banner
        backgroundImage={ImgPasta}
        category={'Italiana'}
        title={'La Dolce Vita Trattoria'}
      />
      <Wrapper>
        <MenuCard
          image={ImgPizza}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          onAddToCart={() => {
            console.log('Adicionado ao carrinho!')
          }}
        />
        <MenuCard
          image={ImgPizza}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          onAddToCart={() => {
            console.log('Adicionado ao carrinho!')
          }}
        />
        <MenuCard
          image={ImgPizza}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          onAddToCart={() => {
            console.log('Adicionado ao carrinho!')
          }}
        />
        <MenuCard
          image={ImgPizza}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          onAddToCart={() => {
            console.log('Adicionado ao carrinho!')
          }}
        />
        <MenuCard
          image={ImgPizza}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          onAddToCart={() => {
            console.log('Adicionado ao carrinho!')
          }}
        />
        <MenuCard
          image={ImgPizza}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          onAddToCart={() => {
            console.log('Adicionado ao carrinho!')
          }}
        />
      </Wrapper>
    </>
  )
}

export default Cardapio
