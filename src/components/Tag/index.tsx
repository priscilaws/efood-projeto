import React from "react";
import { TagContainer } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Tag = ({ children }: Props) => {
  return <TagContainer>{children}</TagContainer>;
};

export default Tag;
