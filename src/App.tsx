import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalCss } from "./styles";
import { Outlet } from "react-router-dom";
import RestaurantCard from "./components/Card";

import star from "./assets/icons/estrela.svg";
import sushiImage from "./assets/logos/food-1.png";
import pastaImage from "./assets/images/massa-1.png";
import { CardList } from "./components/Card/styles";

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <CardList>
          <RestaurantCard
            image={sushiImage}
            title="Hioki Sushi"
            rating={4.9}
            starIcon={star}
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
            tags={["Destaque da semana", "Japonesa"]}
          />

          <RestaurantCard
            image={pastaImage}
            title="La Dolce Vita Trattoria"
            rating={4.6}
            starIcon={star}
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            tags={["Italiana"]}
          />

          <RestaurantCard
            image={pastaImage}
            title="La Dolce Vita Trattoria"
            rating={4.6}
            starIcon={star}
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            tags={["Italiana"]}
          />

          <RestaurantCard
            image={pastaImage}
            title="La Dolce Vita Trattoria"
            rating={4.6}
            starIcon={star}
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            tags={["Italiana"]}
          />
          <RestaurantCard
            image={pastaImage}
            title="La Dolce Vita Trattoria"
            rating={4.6}
            starIcon={star}
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            tags={["Italiana"]}
          />
          <RestaurantCard
            image={pastaImage}
            title="La Dolce Vita Trattoria"
            rating={4.6}
            starIcon={star}
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            tags={["Italiana"]}
          />
        </CardList>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
