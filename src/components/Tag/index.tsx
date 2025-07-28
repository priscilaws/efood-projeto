import React from "react";
import { TagContainer } from "./styles";

export type Props = {
  size?: "small" | "big";
  color?: "orange" | "aqua";
  children: React.ReactNode;
};

const Tag = ({ children, size = "small", color = "orange" }: Props) => (
  <TagContainer size={size} color={color}>
    {children}
  </TagContainer>
);

export default Tag;
