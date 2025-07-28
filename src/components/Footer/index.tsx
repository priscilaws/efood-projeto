import logo from "../../assets/logos/logo-1-1.svg";
import iconInsta from "../../assets/icons/instagram-round-svgrepo-com (1) 1.svg";
import iconFacebook from "../../assets/icons/facebook-round-svgrepo-com 1.svg";
import iconTwiter from "../../assets/icons/twitter-2-svgrepo-com 1.svg";

import { Container, Icon } from "./styles";

const Footer = () => (
  <Container>
    <img src={logo} alt="aumiau logo" />
    <div className="container">
      <Icon src={iconInsta} alt="" />
      <Icon src={iconFacebook} alt="" />
      <Icon src={iconTwiter} alt="" />
    </div>
    <h4>
      Na Aumiau, criamos alimentos naturais com ingredientes selecionados e
      muito carinho. A qualidade e a entrega dos nossos produtos são 100% por
      nossa conta.
    </h4>
  </Container>
);

export default Footer;
