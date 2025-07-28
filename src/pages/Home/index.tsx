import Header from "../../components/Header";
import ProductsList from "../../components/CategoryList";

export default function Home() {
  return (
    <>
      <Header />
      <ProductsList title="Nossos Produtos" background="gray" />
    </>
  );
}
