// src/components/Footer/index.tsx
import React from "react";
import { FooterContainer, Logo, SocialIcons, Text, Icon } from "./styles";

import logo from "../../assets/logos/logo.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="efood logo" />
      <SocialIcons>
        <Icon src={instagram} alt="Instagram" />
        <Icon src={facebook} alt="Facebook" />
        <Icon src={twitter} alt="Twitter" />
      </SocialIcons>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </FooterContainer>
  );
};

export default Footer;
