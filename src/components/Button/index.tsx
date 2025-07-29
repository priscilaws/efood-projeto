import React from "react";
import { ButtonContainer } from "./styles";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
