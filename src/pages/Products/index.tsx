import React from "react";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/three-dogs-banner.png";
import ProductCard from "../../components/Products";
import ImgProduro from "../../assets/images/petmarket.png";
import ProductHeader from "../../components/ProductsHeader";

export default function Produtos() {
  return (
    <>
      <ProductHeader />
      <Banner image={bannerImage} alt="3 cachorros" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
        <ProductCard
          image={ImgProduro}
          title="Titulo do Produto"
          description="descrição do produto aumiau"
        />
      </div>
    </>
  );
}
