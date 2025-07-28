import React from "react";
import {
  CardContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  BuyButton,
} from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
};

const ProductCard = ({ image, title, description }: Props) => (
  <CardContainer>
    <ProductImage src={image} alt={title} />
    <ProductTitle>{title}</ProductTitle>
    <ProductDescription>{description}</ProductDescription>
    <BuyButton>Levar esse item</BuyButton>
  </CardContainer>
);

export default ProductCard;
