// src/components/Banner/index.tsx

import React from "react";
import {
  BannerContainer,
  BannerImage,
  BannerTitle,
  TagWrapper,
} from "./styles";
import { TagContainer } from "../Tag/styles";

type Props = {
  image: string;
  alt: string;
};

const Banner = ({ image, alt }: Props) => (
  <BannerContainer>
    <BannerImage src={image} alt={alt} />
    <BannerTitle>Produtos para Cães</BannerTitle>
    <TagWrapper>
      <TagContainer size="big" color="aqua">
        Promoções
      </TagContainer>
    </TagWrapper>
  </BannerContainer>
);

export default Banner;
