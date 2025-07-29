import { HeaderBar, LogoIcon } from "./styles";

import logo from "../../assets/logos/logo.svg";

const Header = () => (
  <HeaderBar>
    <LogoIcon src={logo} alt="logo efood" />
    <p>Viva experiências gastronômicas no conforto da sua casa</p>
  </HeaderBar>
);

export default Header;
