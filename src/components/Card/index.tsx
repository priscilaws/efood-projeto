import React from "react";
import {
  Card,
  Image,
  TagsContainer,
  Title,
  Description,
  Rating,
  Star,
  Info,
  CardContainer,
} from "./styles";

import estrela from "../../assets/icons/estrela.svg";
import Tag from "../Tag";
import Button from "../Button";
import { TagContainer } from "../Tag/styles";

type Props = {
  image: string;
  title: string;
  description: string;
  rating: number;
  starIcon: string;
  tags: string[];
};

const RestaurantCard = ({
  image,
  title,
  description,
  rating,
  starIcon,
  tags,
}: Props) => {
  return (
    <Card>
      <CardContainer>
        <Image src={image} alt={title} />
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
      </CardContainer>

      <Info>
        <div>
          <Title>{title}</Title>
          <Rating>
            {rating.toFixed(1)}
            <Star src={estrela} alt="estrela" />
          </Rating>
        </div>

        <Description>{description}</Description>
        <Button>Saiba mais</Button>
      </Info>
    </Card>
  );
};

export default RestaurantCard;
